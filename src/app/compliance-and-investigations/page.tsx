export const metadata = {
  title: "Compliance & Investigations — SolanaLink",
  description:
    "AML/KYT screening, Business KYC, and Blockchain Investigations services by SolanaLink.",
};

export default function ComplianceAndInvestigationsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Compliance &amp; Investigations
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            SolanaLink's Compliance &amp; Investigations services provide robust solutions for
            businesses to navigate regulatory landscapes and mitigate risks effectively. Our
            comprehensive suite of services ensures adherence to compliance standards and offers
            expert investigative support.
          </p>
        </div>

        <div className="mt-12 bg-white dark:bg-slate-900/50 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Key Services</h3>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-start gap-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
              {/* Shield/lock icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 11.99l7-3.11V11c0 4.07-2.44 7.93-7 9.54-4.56-1.61-7-5.47-7-9.54V9.88l7 3.11z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">AML/KYT Screening</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Advanced screening to ensure compliance with anti-money laundering regulations and
                know your transaction protocols.
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-start gap-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
              {/* Briefcase icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M10 4h4a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h2V6a2 2 0 012-2zm4 4V6h-4v2h4z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">Business KYC</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Thorough verification of business entities to establish trust and compliance in
                business relationships.
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-start gap-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
            <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
              {/* Search icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">Blockchain Investigations</h4>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Expert investigations into blockchain transactions to identify and address
                suspicious activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

