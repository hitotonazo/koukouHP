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


■年代別ファイル（追加）
- images/hero_2016_1920x1080.png
- images/gallery_2016_1200x800.png
- pdfs/school_guide_2016.pdf
- pdfs/notice_2016.pdf
- images/hero_2010_1920x1080.png
- images/gallery_2010_1200x800.png
- pdfs/school_guide_2010.pdf
- pdfs/notice_2010.pdf
- images/hero_2003_1920x1080.png
- images/gallery_2003_1200x800.png
- pdfs/school_guide_2003.pdf
- pdfs/notice_2003.pdf
- images/hero_1998_1920x1080.png
- images/gallery_1998_1200x800.png
- pdfs/school_guide_1998.pdf
- pdfs/notice_1998.pdf
