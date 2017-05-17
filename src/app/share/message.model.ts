export class Message {
  /** 令牌 */
  public token: String;
  /** 文字訊息 */
  public message: String;
  /** 貼圖包識別碼 */
  public stickerPackageId: String;
  /** 貼圖識別碼 */
  public stickerId: String;
  /** 圖片檔案路徑。限 jpg, png 檔 */
  public fileUri: String;
  /** 圖片檔案名稱 */
  public filename: String;
}
