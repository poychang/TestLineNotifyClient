export interface Message {
  /** 令牌 */
  token: string;
  /** 文字訊息 */
  message: string;
  /** 貼圖包識別碼 */
  stickerPackageId?: string;
  /** 貼圖識別碼 */
  stickerId?: string;
  /** 圖片檔案路徑。限 jpg, png 檔 */
  fileUri?: string;
  /** 圖片檔案名稱 */
  filename?: string;
}
