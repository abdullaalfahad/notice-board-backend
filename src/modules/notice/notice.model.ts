import { Schema, model } from 'mongoose';

const noticeSchema = new Schema(
  {
    targetType: {
      type: String,
      enum: ['INDIVIDUAL'],
      default: 'INDIVIDUAL',
    },
    noticeTitle: { type: String, required: true },
    employeeId: { type: String, required: true },
    employeeName: { type: String, required: true },
    position: { type: String, required: true },
    noticeType: { type: String, required: true },
    publishDate: { type: Date, required: true },
    noticeBody: { type: String, required: true },
    attachments: { type: [String], default: [] },
    status: {
      type: String,
      enum: ['draft', 'published', 'unpublished'],
      default: 'published',
    },
  },
  { timestamps: true }
);

export const Notice = model('Notice', noticeSchema);
