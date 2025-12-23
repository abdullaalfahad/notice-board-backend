import { z } from 'zod';

export const createNoticeSchema = z.object({
  body: z.object({
    noticeTitle: z
      .string({
        message: 'Notice title is required',
      })
      .min(3, 'Notice title must be at least 3 characters'),

    employeeId: z
      .string({
        message: 'Employee ID is required',
      })
      .min(1, 'Employee ID cannot be empty'),

    employeeName: z
      .string({
        message: 'Employee name is required',
      })
      .min(2, 'Employee name must be at least 2 characters'),

    position: z
      .string({
        message: 'Position is required',
      })
      .min(2, 'Position must be at least 2 characters'),

    noticeType: z
      .string({
        message: 'Notice type is required',
      })
      .min(2, 'Notice type must be at least 2 characters'),

    publishDate: z
      .string({
        message: 'Publish date is required',
      })
      .datetime({ message: 'Publish date must be a valid ISO datetime' }),

    noticeBody: z
      .string({
        message: 'Notice body is required',
      })
      .min(10, 'Notice body must be at least 10 characters'),

    attachments: z
      .array(
        z.string({
          message: 'Attachment must be a string URL',
        }))
      .optional(),

   status: z.enum(['draft', 'published', 'unpublished'], 
    { message: "Status must be one of draft, published, or unpublished"}).optional(),
  }),
});

export const updateStatusSchema = z.object({
  body: z.object({
    status: z.enum(['draft', 'published', 'unpublished'], 
    { message: "Status must be one of draft, published, or unpublished"}),
  }),
});
