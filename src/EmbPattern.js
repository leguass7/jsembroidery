const _ = require('lodash')
const EmbThread = require('./EmbThread')
const {
  JUMP,
  STITCH,
  STOP,
  TRIM,
  COLOR_CHANGE,
  NEEDLE_SET,
  SEQUIN_EJECT,
  SEQUIN_MODE,
  END
} = require('./EmbConstant')

class EmbPattern {
  constructor () {
    this.stitches = [] // type: list
    this.threadlist = // type: list
      this.extras = {} // type: dict
    // filename, name, category, author, keywords, comments, are typical
    this._previousX = 0 // type: float
    this._previousY = 0 // type: float
  }

  __ne__ (other) {
    return !this.__eq__(other)
  }

  __eq__ (other) {
    if (!(other instanceof EmbPattern)) return false
    return (_.isEqual(this.stitches, other.stitches) &&
      _.isEqual(this.threadlist, other.threadlist) &&
      _.isEqual(this.extras, other.extras))
  }

  __str__ () {
    return `EmbPattern ${this.extras.name} (commands:${this.stitches.length}, threads: ${this.threadlist.length}) `
    /*
    if "name" in self.extras:
      return "EmbPattern %s (commands: %3d, threads: %3d)" % \
        (self.extras["name"], len(self.stitches), len(self.threadlist))
    return "EmbPattern (commands: %3d, threads: %3d)" % (len(self.stitches), len(self.threadlist))
    */
  }

  __len__ () {
    return this.stitches.length
  }

  __getitem__ (item) {
    return (typeof item === 'string') ? this.extras[item] || '' : this.stitches[item]
  }

  __setitem__ (key, value) {
    if (typeof item === 'string') {
      this.extras[key] = value
    } else {
      this.stitches[key] = value
    }
  }

  __copy__ () {
    return this.copy()
  }

  __deepcopy__ () {
    return this.copy()
  }

  __add__ (other) {
    const p = this.copy()
    p.add_pattern(other)
    return p
  }

  __radd__ (other) {
    const p = other.copy()
    p.add_pattern(this)
    return p
  }

  copy () {
    /*
    emb_pattern = EmbPattern()
    emb_pattern.stitches = self.stitches[:]
    emb_pattern.threadlist = self.threadlist[:]
    emb_pattern.extras.update(self.extras)
    emb_pattern._previousX = self._previousX
    emb_pattern._previousY = self._previousY
    return emb_pattern
    */

    /*
    const emb_pattern = new EmbPattern()
    emb_pattern.stitches = _.cloneDeep(this.stitches)
    emb_pattern.threadlist = _.cloneDeep(this.threadlist)
    emb_pattern.extras.= _.cloneDeep(this.extras)
    emb_pattern._previousX = _.cloneDeep(this._previousX)
    emb_pattern._previousY = _.cloneDeep(this._previousY)
    */
    // FIXME: not tested
    return _.cloneDeep(this)
  }

  clear () {
    this.stitches = []
    this.threadlist = []
    this.extras = {}
    this._previousX = 0
    this._previousY = 0
  }

  move (dx = 0, dy = 0, position) {
    // Move dx, dy
    if (!position) {
      this.add_stitch_relative(JUMP, dx, dy)
    } else {
      this.insert_stitch_relative(position, JUMP, dx, dy)
    }
  }

  move_abs (x, y, position) {
    // Move absolute x, y
    if (!position) {
      this.add_stitch_absolute(JUMP, x, y)
    } else {
      this.insert(position, JUMP, x, y)
    }
  }

  stitch (dx = 0, dy = 0, position) {
    // Stitch dx, dy
    if (!position) {
      this.add_stitch_relative(STITCH, dx, dy)
    } else {
      this.insert_stitch_relative(position, STITCH, dx, dy)
    }
  }

  stitch_abs (x, y, position) {
    // Stitch absolute x, y
    if (!position) {
      this.add_stitch_absolute(STITCH, x, y)
    } else {
      this.insert(position, STITCH, x, y)
    }
  }

  stop (dx = 0, dy = 0, position) {
    // Stop dx, dy
    if (!position) {
      this.add_stitch_relative(STOP, dx, dy)
    } else {
      this.insert_stitch_relative(position, STOP, dx, dy)
    }
  }

  trim (dx = 0, dy = 0, position) {
    // Trim dx, dy
    if (!position) {
      this.add_stitch_relative(TRIM, dx, dy)
    } else {
      this.insert_stitch_relative(position, TRIM, dx, dy)
    }
  }

  color_change (dx = 0, dy = 0, position) {
    // Color Change dx, dy"
    if (!position) {
      this.add_stitch_relative(COLOR_CHANGE, dx, dy)
    } else {
      this.insert_stitch_relative(position, COLOR_CHANGE, dx, dy)
    }
  }

  needle_change (needle = 0, dx = 0, dy = 0, position) {
    // Needle change, needle, dx, dy
    const cmd = encode_thread_change(NEEDLE_SET, null, needle)
    if (!position) {
      this.add_stitch_relative(cmd, dx, dy)
    } else {
      this.insert_stitch_relative(position, cmd, dx, dy)
    }
  }

  sequin_eject (dx = 0, dy = 0, position) {
    // Eject Sequin dx, dy
    if (!position) {
      this.add_stitch_relative(SEQUIN_EJECT, dx, dy)
    } else {
      this.insert_stitch_relative(position, SEQUIN_EJECT, dx, dy)
    }
  }

  sequin_mode (dx = 0, dy = 0, position) {
    // Eject Sequin dx, dy
    if (!position) {
      this.add_stitch_relative(SEQUIN_MODE, dx, dy)
    } else {
      this.insert_stitch_relative(position, SEQUIN_MODE, dx, dy)
    }
  }

  end (dx = 0, dy = 0, position) {
    // End Design dx, dy
    if (!position) {
      this.add_stitch_relative(END, dx, dy)
    } else {
      this.insert_stitch_relative(position, END, dx, dy)
    }
  }

  add_thread (thread) {
    // Adds thread to design.
    // Note: this has no effect on stitching and can be done at any point.
    if (thread instanceof EmbThread) {
      this.threadlist.append(thread)
    } else {
      const thread_object = new EmbThread()
      thread_object.set(thread)
      this.threadlist.append(thread_object)
    }
  }

  metadata (name, data) {
    // Adds select metadata to design.
    // Note: this has no effect on stitching and can be done at any point.
    this.extras[name] = data
  }

  get_metadata (name, def) {
    return this.extras[name] || def
  }

  extends () {
    return this.bounds()
  }

  bounds () {
    // Returns the bounds of the stitch data:
    // min_x, min_y, max_x, max_y
    let min_x = Infinity
    let min_y = Infinity
    let max_x = -Infinity
    let max_y = -Infinity
    for (let i = 0; i < this.stitches.length; i++) {
      const stitch = this.stitches[i]
      if (stitch[0] > max_x) max_x = stitch[0]
      if (stitch[0] < min_x) min_x = stitch[0]
      if (stitch[1] > max_y) max_y = stitch[1]
      if (stitch[1] < min_y) min_y = stitch[1]
    }
    return [min_x, min_y, max_x, max_y]
  }

  count_stitch_commands (command) {}
}

module.exports = {
  EmbPattern
}
