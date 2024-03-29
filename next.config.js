/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 全ての API routes にマッチ
  async headers() {
    return [
      {
        // 対象APIのパスパターン
        // 今回は src/pages/api/ 配下にAPIを作っているので下記のようにする
        source: '/pages/:path*',
        headers: [
          {
            // CORSを許可するオリジン
            key: 'Access-Control-Allow-Origin',
            // すべてのオリジンを許可するなら * (アスタリスク)
            // ただセキュリティ的にはよろしくないので注意
            value: 'https://<vercelのプロジェクト名>.vercel.app',
          },
          {
            // 許可するメソッド
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,POST',
          },
          {
            // 許可するリクエストヘッダ
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
