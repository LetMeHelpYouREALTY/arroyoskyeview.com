import type { Metadata } from 'next'
import PageSchemas from '../components/page-schemas'

import MarketingPageShell from '../components/marketing-page-shell'
export const metadata: Metadata = {
  title: 'Accessibility Statement | Arroyo at Skyeview | Homes by Dr. Jan Duffy',
  description: 'Accessibility Statement for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Our commitment to making our website accessible to all users in compliance with WCAG 2.1 Level AA standards.',
  alternates: {
    canonical: 'https://www.arroyoskyeview.com/accessibility',
  },
}

export default function AccessibilityPage() {
  return (
    <MarketingPageShell
      schema={
        <PageSchemas
        pageType="about"
        url="/accessibility"
        title="Accessibility Statement | Arroyo at Skyeview | Homes by Dr. Jan Duffy"
        description="Accessibility Statement for Arroyo at Skyeview | Homes by Dr. Jan Duffy. Our commitment to making our website accessible to all users in compliance with WCAG 2.1 Level AA standards."
        breadcrumbs={[
          { name: 'Legal', url: '/legal' },
          { name: 'Accessibility Statement', url: '/accessibility' },
        ]}
      />
      }
      showContactCta={true}
      showBanner={false}
    >
      <section className="bg-linear-to-b from-muted/80 to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Accessibility Statement
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Commitment to Accessibility</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Arroyo at Skyeview | Homes by Dr. Jan Duffy is committed to ensuring digital accessibility 
                for people with disabilities. We are continually improving the user experience for 
                everyone and applying the relevant accessibility standards to achieve these goals.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                standards, which explain how to make web content more accessible for people with 
                disabilities. These guidelines are recognized and adopted by governments and organizations 
                worldwide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Accessibility Features</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We have implemented the following accessibility features on our website:
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Semantic HTML Structure</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Our website uses semantic HTML5 elements to provide clear structure and meaning to 
                content, making it easier for screen readers and assistive technologies to navigate.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Alternative Text</h3>
              <p className="text-lg text-muted-foreground mb-4">
                All images on our website include descriptive alternative text (alt text) that conveys 
                the purpose and content of the image. This allows users with screen readers to understand 
                the visual content.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Keyboard Navigation</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Our website can be navigated using only a keyboard, without requiring a mouse. All 
                interactive elements are accessible via keyboard navigation, including dropdown menus, 
                forms, and links.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Color Contrast</h3>
              <p className="text-lg text-muted-foreground mb-4">
                We maintain sufficient color contrast ratios between text and background colors to 
                ensure readability for users with visual impairments or color blindness. Our color 
                combinations meet WCAG 2.1 Level AA standards.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Responsive Design</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Our website is designed to be responsive and accessible on various devices and screen 
                sizes, including mobile phones, tablets, and desktop computers. Content reflows 
                appropriately to accommodate different viewport sizes.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">Form Labels</h3>
              <p className="text-lg text-muted-foreground mb-4">
                All form fields on our website include proper labels and instructions, making forms 
                accessible to users of assistive technologies. Error messages are clearly identified 
                and associated with the relevant form fields.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-6 mb-4">ARIA Labels</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Where appropriate, we use ARIA (Accessible Rich Internet Applications) labels and 
                landmarks to enhance screen reader compatibility and provide additional context for 
                interactive elements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Ongoing Improvements</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We are committed to continuously improving the accessibility of our website. Our efforts 
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Regular accessibility audits and testing</li>
                <li>Training for our team on accessibility best practices</li>
                <li>Monitoring and addressing accessibility issues as they arise</li>
                <li>Staying current with WCAG guidelines and accessibility standards</li>
                <li>Testing with assistive technologies and screen readers</li>
                <li>Seeking feedback from users with disabilities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Known Limitations</h2>
              <p className="text-lg text-muted-foreground mb-4">
                While we strive to ensure accessibility, we acknowledge that some areas of our website 
                may have limitations. We are working to address these issues and improve accessibility 
                across all pages. Known limitations may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Third-party content or widgets that may not be fully accessible</li>
                <li>PDF documents that may not be fully accessible (we are working to provide accessible alternatives)</li>
                <li>Video content that may require captions (we are working to add captions to all videos)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Third-Party Content</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our website may include content from third parties or 
                other service providers. While we aim to ensure accessibility, we cannot guarantee 
                the accessibility of third-party content. If you encounter accessibility issues with 
                third-party content, please contact us so we can work with the third party to address 
                the issue.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Feedback and Accessibility Concerns</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any 
                accessibility barriers or have suggestions for improvement, please contact us. We are 
                committed to addressing accessibility issues promptly and making our website more 
                accessible for everyone.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                When reporting accessibility issues, please include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>The URL or page where you encountered the issue</li>
                <li>A description of the problem</li>
                <li>The assistive technology you were using (if applicable)</li>
                <li>Your contact information (optional, but helpful if we need to follow up)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Assistive Technology Compatibility</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our website is designed to be compatible with common assistive technologies, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                <li>Keyboard navigation</li>
                <li>Screen magnification software</li>
                <li>Voice recognition software</li>
                <li>Browser accessibility features</li>
              </ul>
              <p className="text-lg text-muted-foreground mb-4">
                We recommend using the latest versions of assistive technologies and web browsers for 
                the best experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Alternative Access Methods</h2>
              <p className="text-lg text-muted-foreground mb-4">
                If you have difficulty accessing any content on our website, we are happy to provide 
                information in alternative formats. Please contact us to request:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Printed materials or documents</li>
                <li>Information provided over the phone</li>
                <li>Email communications with accessible formatting</li>
                <li>Other accommodations as needed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Legal Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We are committed to complying with applicable accessibility laws and regulations, 
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6 ml-4">
                <li>Americans with Disabilities Act (ADA)</li>
                <li>Section 508 of the Rehabilitation Act</li>
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Us</h2>
              <p className="text-lg text-muted-foreground mb-4">
                If you have questions, concerns, or feedback about the accessibility of our website, 
                or if you need assistance accessing any content, please contact us:
              </p>
              <div className="rounded-lg border border-border bg-muted/40 border-l-4 border-l-primary p-6">
                <p className="text-lg text-foreground font-semibold mb-2">Dr. Jan Duffy</p>
                <p className="text-lg text-muted-foreground mb-2">Nevada Real Estate License #S.0197614</p>
                <p className="text-lg text-muted-foreground mb-2">
                  8912 Vanhoy Crk St<br />
                  Las Vegas, NV 89166
                </p>
                <p className="text-lg text-muted-foreground mb-2">
                  <a href="tel:7029034687" className="font-semibold text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                    Phone: (702) 903-4687
                  </a>
                </p>
                <p className="text-lg text-muted-foreground">
                  Email: <a href="mailto:info@arroyoskyeview.com" className="text-primary hover:text-primary/90 underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">info@arroyoskyeview.com</a>
                </p>
              </div>
              <p className="text-lg text-muted-foreground mt-4">
                We aim to respond to accessibility inquiries within 2-3 business days.
              </p>
            </section>
          </div>
        </div>
    </MarketingPageShell>
  )
}