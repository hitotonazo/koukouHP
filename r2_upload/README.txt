R2アップロード用フォルダです。

■推奨パス（例）
R2バケットの公開URL（またはカスタムドメイン）:
  https://media.example.com/takahara/

このZIP内の r2_upload/images と r2_upload/pdfs を
上記の /takahara/ 配下にそのままアップロードしてください。

■サイト側設定
assets/r2_config.js の
  window.R2_BASE = "https://YOUR-R2-PUBLIC-DOMAIN/takahara";
を、実際の公開URLに変更してください。

■注意
- Cloudflare Pages から R2 を参照するだけなので、CMSは不要です（静的）。
- R2を「Public bucket」または「Custom domain」で配信してください。
