
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      <div className="flex justify-center">
        <Image src="/solanalink-logo.png" alt="SolanaLink Logo" width={300} height={300} />
      </div>
      <h1 className="text-3xl font-bold">
        ソラナリンク株式会社 — 事業範囲 (Service Scope)
      </h1>

      <section>
        <h2 className="text-2xl font-semibold">
          クラウドコンピューティング (Cloud Computing)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>クラウド管理 / Cloud Management</strong>: 構築・コスト最適化・セキュリティ強化
            <br />
            Build, optimize cost, and enhance security in cloud environments.
          </li>
          <li>
            <strong>カスタマイズ / Customization</strong>: 1か月以上のプロジェクト向け
            <br />
            One-time service for projects over 1 month.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">
          ECサイト構築・運営 (E-commerce Solutions)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>サイト構築・運営 / Site Setup & Management</strong>: EC構築、商品登録、決済導入、セキュリティ対策
            <br />
            Full-service e-commerce setup including listings, payment, and security.
          </li>
          <li>
            <strong>SEO最適化 / SEO Optimization</strong>: Google, Yahoo!, Bing対応
            <br />
            Search engine optimization for Google, Yahoo!, Bing.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">
          ホームページ・ウェブ (Web Solutions)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>脆弱性診断 / Security Scan</strong>: セキュリティ診断と対策計画
            <br />
            Vulnerability scanning & security planning.
          </li>
          <li>
            <strong>ファイアウォール / Firewall Support</strong>: 継続的な保守・技術サポート
            <br />
            Ongoing firewall maintenance & support.
          </li>
          <li>
            <strong>ウェブマガジン / Web Magazine</strong>: 構築・運営・週次更新
            <br />
            Build and manage web magazines with weekly updates.
          </li>
          <li>
            <strong>カスタマイズ / Customization</strong>: 2週間以上のプロジェクト向け
            <br />
            One-time customization for projects over 2 weeks.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">
          ブロックチェーン (Blockchain)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>セキュリティ & サポート / Security & Support</strong>: 技術・セキュリティ支援
            <br />
            Technical and security support for blockchain services.
          </li>
          <li>
            <strong>暗号資産リカバリー / Crypto Recovery</strong>: 暗号資産復旧サービス
            <br />
            Cryptocurrency recovery service.
          </li>
          <li>
            <strong>ソフトウェア開発 / Software Development</strong>: 1〜2週間の短期開発
            <br />
            Short-term software development (1–2 weeks).
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">📌 連絡先 (Contact)</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>担当 / Contact Person</strong>: Tony-san
          </li>
          <li>
            <strong>Line</strong>: <a href="https://line.me/ti/p/vsK4Bcw_Xm" target="_blank" rel="noopener noreferrer">To connect Tony&apos;s Line ID</a>
          </li>
          <li>
            <strong>Twitter</strong>: <a href="https://twitter.com/TonyIronTokyo" target="_blank" rel="noopener noreferrer">@TonyIronTokyo</a>
          </li>
          <li>
            <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/tony-iron-309920295/" target="_blank" rel="noopener noreferrer">Tony&apos;s LinkedIn Profile</a>
          </li>
          <li>
            <strong>Github</strong>: <a href="https://github.com/tonycai" target="_blank" rel="noopener noreferrer">Tony&apos;s Github Profile</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
