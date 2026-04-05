このプロジェクトは [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) で作成した [Next.js](https://nextjs.org) アプリです。

## はじめに

まず開発サーバーを起動します。

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと表示を確認できます。

`app/page.tsx` を編集するとページが変わります。保存すると自動で画面に反映されます。

## 静的画像の置き場所

画像ファイルは `app/assets/` に置き、静的 import で参照してください（例: [`next/image`](https://nextjs.org/docs/app/api-reference/components/image)）。`public/` に置くとビルド対象に含まれないため、`public/` には置かないでください。
