export interface UploadedFile {
  filename: string;
  url: string;
  publicId: string;
  format: string;
  size: number;
  resourceType: string;
}

export interface CloudinaryFile extends Express.Multer.File {
  path: string;
  filename: string;
  format: string;
  resource_type: string;
}

export interface DeleteResult {
  result: string;
}