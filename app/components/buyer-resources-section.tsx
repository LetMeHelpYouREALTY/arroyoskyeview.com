import Link from 'next/link'

export default function BuyerResourcesSection() {
  return (
    <section className="bg-blue-50 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Resources for New Construction Buyers
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Buying a new construction home at Arroyo at Skyeview Homes in Skye Canyon, northwest Las Vegas, Nevada (zip code 89166) is different from buying a resale. These guides will help you navigate the new construction process, understand builder incentives, and maximize your value with expert buyer representation from Dr. Jan Duffy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/buyers/first-time-homebuyer"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              First-Time Homebuyer Guide
            </h3>
            <p className="text-muted-foreground">
              First-time homebuyer guide for new construction. Learn about down payment assistance, financing options, and the complete homebuying process with expert guidance.
            </p>
          </Link>
          <Link
            href="/buyers/financing-new-construction"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Financing New Construction Homes
            </h3>
            <p className="text-muted-foreground">
              Complete guide to financing new construction homes in Las Vegas, Nevada. Learn about loan types, down payment assistance, builder incentives, and financing options.
            </p>
          </Link>
          <Link
            href="/buyers/builder-incentives-guide"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Current Builder Incentives for Arroyo at Skyeview Homes
            </h3>
            <p className="text-muted-foreground">
              Current builder incentives and promotions for Arroyo at Skyeview Homes. Learn about rate buy-downs, closing cost assistance, and how to maximize your savings.
            </p>
          </Link>
          <Link
            href="/work-with-dr-jan"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Why Work with Dr. Jan Duffy for Arroyo at Skyeview Homes
            </h3>
            <p className="text-muted-foreground">
              Expert buyer representation with construction monitoring, building standards inspection, and insider knowledge—at no extra cost to you.
            </p>
          </Link>
          <Link
            href="/homebuying-process"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Step-by-Step New Construction Homebuying Process
            </h3>
            <p className="text-muted-foreground">
              Complete guide to the new construction homebuying process from pre-registration to closing. Understand each step and what to expect.
            </p>
          </Link>
          <Link
            href="/services/construction-monitoring"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              New Construction Home Inspections Guide
            </h3>
            <p className="text-muted-foreground">
              Complete guide to inspections for new construction homes, including construction monitoring, building standards inspection, and what to look for.
            </p>
          </Link>
          <Link
            href="/buyers/moving-to-las-vegas"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Moving to Las Vegas: Complete Guide
            </h3>
            <p className="text-muted-foreground">
              Complete guide for relocating to Las Vegas, including cost of living, neighborhoods, schools, and what to know before buying a new construction home.
            </p>
          </Link>
          <Link
            href="/services/buyer-representation"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:border-blue-300 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Buyer Representation vs Builder's Agent
            </h3>
            <p className="text-muted-foreground">
              Learn the critical difference between having your own buyer's agent versus using the builder's agent, and why it matters for new construction.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

