export default function ClientTestimonials() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Trusted by Leading Companies
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Our clients' success is our greatest achievement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white dark:bg-[#1a2835] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="flex items-center mb-4">
            <img
              alt="Client photo"
              className="w-12 h-12 rounded-full object-cover mr-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlJivaDuOhO4vn9CsW10ggCeW-wzSLFlCz5KA4xtxJjCYjYRK3AdPFY-IcwnPo9Qciz2PXSUivrrLRlRR2BZ89fkqytcZMmN5Is6ACEz3ChnwHFgSbmwX7c10oC-Qj5N4vlG967UGRRSnQiwb7MPDKGeclsNdNyVvDl_MNButgswa1_Z7JVPTeNxf7j0eIUHf4o4Saqwp_jhNbHGOG70tw0RtWhtYOBiWeTfY88tiCCAS5oU90SCJvj9JUAhV2TnZVPtELjT6NQlE"
            />
            <div>
              <p className="font-bold text-gray-800 dark:text-white">Alex Johnson</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Innovate Corp</p>
            </div>
          </div>
          <div className="flex items-center text-yellow-400 mb-4" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
            "SolanaLink has been instrumental in our digital transformation. Their innovative solutions and exceptional service have significantly improved our operational efficiency."
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-[#1a2835] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="flex items-center mb-4">
            <img
              alt="Client photo"
              className="w-12 h-12 rounded-full object-cover mr-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTckpA7tv44c4mt_1xIro7R1aWBJbhq8h7TiPQrZiPxtKMS6CVC5x1Nm0RfUahd0zOsSVUeYavdRc3_xOphDiuPCPnwG2jW0m1T_Pmcop8Io0K4hV8RkS-IGYzmSFdYlTPeI7JBI5r6uh6O8EFtsO_rZNSWEFi5h5fxnPpX7w3LibQeTx2WbdYSoQArY-3bPJmTh8JuAWKE3LJTpU-nadIXOO0H2extW60sjtRG3MsOv-NYI-1XRSkmsQNhqITTG--yqKnNindofA"
            />
            <div>
              <p className="font-bold text-gray-800 dark:text-white">Samantha Lee</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CTO, SecureNet</p>
            </div>
          </div>
          <div className="flex items-center text-yellow-400 mb-4" aria-label="4.5 out of 5 stars">
            {/* 4 full stars */}
            {Array.from({ length: 4 }).map((_, i) => (
              <svg key={i} className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            {/* half star */}
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 15.4l-3.76 2.27 1-4.28L5.5 10.5l4.38-.38L12 6l2.12 4.12 4.38.38-3.74 2.89 1 4.28z" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
            "We trust SolanaLink with our critical IT infrastructure. Their reliable and secure solutions ensure our data is protected and our systems are always running smoothly."
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-[#1a2835] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="flex items-center mb-4">
            <img
              alt="Client photo"
              className="w-12 h-12 rounded-full object-cover mr-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfvZbWXlOvYNAZcNaWoQrVXk8mkGY7PeQfU-z27g7KNfYyB2Ek18kZKw3aEHGlUw9xEH-kcVnBQ2MOyvRkoLIPTGJmAD4FDMBt7myH-ITEbdPLn33HFJMhzmjqPiqYbDejK4zHJqlVzrILwaKQMQFCCn_FJ--vSwCywLrPAvODD-r0BOlV8QWFjs-tA9J_GYxH3crcsPnpCVWj3ur69sn7tkd6_Hfq5oE5ruhEyq499e7OHCGrdPVV0kfE7YxEv5rzk53J0PLlLYQ"
            />
            <div>
              <p className="font-bold text-gray-800 dark:text-white">Dr. Emily Carter</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Director, HealthBridge</p>
            </div>
          </div>
          <div className="flex items-center text-yellow-400 mb-4" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
            "SolanaLink's technology solutions have transformed our healthcare services. Their expertise and dedication have helped us deliver better patient care."
          </p>
        </div>
      </div>
    </section>
  );
}

