'use strict'

const {
  CONTINGENCY_SEQUIN_JUMP
} = require('./EmbConstant')

const SEQUIN_CONTINGENCY = CONTINGENCY_SEQUIN_JUMP
const FULL_JUMP = true
const ROUND = true
const MAX_JUMP_DISTANCE = 2047
const MAX_STITCH_DISTANCE = 2047

const VERSION_1 = 1.0
const VERSION_6 = 6.0

const PES_VERSION_1_SIGNATURE = '#PES0001'
const PES_VERSION_6_SIGNATURE = '#PES0060'

const EMB_ONE = 'CEmbOne'
const EMB_SEG = 'CSewSeg'

exports.write = (pattern, f, settings = null) => {
  //
}
exports.write_truncated_version_1 = (pattern, f) => {
  //
}

exports.write_truncated_version_6 = (pattern, f) => {
  //
}

exports.write_version_1 = (pattern, f) => {
  //
}
exports.write_version_6 = (pattern, f) => {
  //
}

exports.write_pes_header_v1 = (f, distinct_block_objects) => {
  //
}

exports.write_pes_header_v6 = (pattern, f, chart, distinct_block_objects) => {
  //
}

exports.write_pes_addendum = (f, color_info) => {
  //
}

exports.write_pes_string_8 = (f, string) => {
  //
}

exports.write_pes_string_16 = (f, string) => {
  //
}

exports.write_pes_thread = (f, thread) => {
  //
}

exports.write_pes_blocks = (f, pattern, chart, left, top, right, bottom, cx, cy) => {
  //
}

exports.write_pes_sewsegheader = (f, left, top, right, bottom) => {

}

exports.get_as_segments_blocks = (pattern, chart, adjust_x, adjust_y) => {
  //
}

exports.write_pes_embsewseg_segments = (f, pattern, chart, left, bottom, cx, cy) => {
  //
}
