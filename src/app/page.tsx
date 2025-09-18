
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      <div className="flex justify-center">
        <Image
          src="/solanalink-logo.png"
          alt="SolanaLink Co., Ltd. Logo"
          width={240}
          height={240}
        />
      </div>
      <h1 className="text-3xl font-bold text-center">
        ソラナリンク株式会社 — 事業内容 (Services)
      </h1>
      <p className="text-center text-base opacity-80">
        クラウド、EC、ウェブ、ブロックチェーン、コンプライアンス領域で、設計・実装・運用・セキュリティまで一貫支援します。
        <br />
        End-to-end services across cloud, e-commerce, web, blockchain, and compliance.
      </p>

      <section>
        <h2 className="text-2xl font-semibold">
          クラウド (Cloud Computing)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>クラウド管理 / Cloud Management</strong>:
            設計・構築・運用、コスト最適化、セキュリティ強化
            <br />
            Architecture, build and operations; cost optimization; security hardening.
          </li>
          <li>
            <strong>カスタムソリューション / Custom Solutions</strong>:
            要件に応じた設計・実装・移行支援
            <br />
            Bespoke design, implementation, and migration assistance.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">
          ECサイト (E-commerce Solutions)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>サイト構築・運営 / Site Setup & Operations</strong>:
            ストア構築、商品管理、決済/物流連携、セキュリティ対策
            <br />
            Storefront build, catalog, payments/logistics integrations, and security.
          </li>
          <li>
            <strong>SEO最適化 / SEO Optimization</strong>: Google, Yahoo!, Bing対応
            <br />
            Technical SEO, performance, and structured data for Google/Yahoo!/Bing.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">
          ウェブ (Web Solutions)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>脆弱性診断 / Security Assessment</strong>:
            診断・改善計画・再検証
            <br />
            Vulnerability assessments, remediation plans, and re‑testing.
          </li>
          <li>
            <strong>ファイアウォール / Firewall Support</strong>:
            設計・ルール整備・継続運用
            <br />
            Configuration, rule hygiene, and ongoing operations.
          </li>
          <li>
            <strong>ウェブマガジン / Web Magazine</strong>:
            構築・運用・編集ワークフロー整備
            <br />
            Build and operate content sites with editorial workflows.
          </li>
          <li>
            <strong>カスタマイズ / Customization</strong>:
            要件に応じた機能追加・改修
            <br />
            Feature development and enhancements tailored to your needs.
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
            <strong>セキュリティ支援 / Security Advisory</strong>:
            技術・セキュリティのアドバイザリー支援
            <br />
            Technical and security advisory for blockchain services.
          </li>
          <li>
            <strong>暗号資産リカバリー / Asset Recovery</strong>:
            暗号資産復旧のための実務支援
            <br />
            Practical support for cryptocurrency recovery.
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
        <h2 className="text-2xl font-semibold">
          コンプライアンス (Compliance & Investigations)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>AML/KYTスクリーニング / AML/KYT Screening</strong>:
            APIでウォレット/取引をリアルタイム審査し、規制順守とリスク管理を強化
            <br />
            Real-time wallet and transaction screening via API for compliance and risk reduction.
          </li>
          <li>
            <strong>企業向けKYC / Business KYC</strong>:
            本人確認・書類検証・なりすまし防止を自動化し、迅速かつ適正なオンボーディングを実現
            <br />
            Automated identity and document checks for fast, compliant onboarding and fraud prevention.
          </li>
          <li>
            <strong>体制構築（AML/KYC） / AML/KYC Program Setup</strong>:
            方針・手順・リスク評価・レポーティング体制を設計し、コンプライアンス体制を構築
            <br />
            Design policies, procedures, risk assessments, and reporting for compliant operations.
          </li>
          <li>
            <strong>ブロックチェーン調査 / Blockchain Investigations</strong>:
            資金トレーシング、アドレス属性付与、証跡レポート作成、取引所/当局連携
            <br />
            Trace funds, attribute addresses, produce evidentiary reports, and coordinate for recovery.
          </li>
          <li>
            <strong>カスタマイズ / Customization</strong>:
            しきい値・ダッシュボード・API連携などを要件に合わせて提供
            <br />
            Modular APIs, configurable thresholds, dashboards, and integrations to fit your needs.
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2 className="text-2xl font-semibold">連絡先 (Contact)</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>担当 / Contact</strong>: Tony
          </li>
          <li>
            <strong>LINE</strong>: <a href="https://line.me/ti/p/vsK4Bcw_Xm" target="_blank" rel="noopener noreferrer">Connect on LINE</a>
          </li>
          <li>
            <strong>Twitter</strong>: <a href="https://twitter.com/TonyIronTokyo" target="_blank" rel="noopener noreferrer">@TonyIronTokyo</a>
          </li>
          <li>
            <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/tony-iron-309920295/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </li>
          <li>
            <strong>GitHub</strong>: <a href="https://github.com/tonycai" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
