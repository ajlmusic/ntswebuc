import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white shadow-sm rounded-xl border border-gray-200 p-8 sm:p-10">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nehetek Technology Solutions — Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">Last Updated:</span> November 29, 2025
          </p>
          <p className="mt-1 text-sm text-gray-600">
            <span className="font-medium text-gray-700">Website:</span>{' '}
            <a
              href="https://nehetek.com"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
            >
              https://nehetek.com
            </a>
            <br />
            <span className="font-medium text-gray-700">Contact:</span>{' '}
            <a
              href="mailto:support@nehetek.com"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
            >
              support@nehetek.com
            </a>
          </p>
        </header>

        <div className="space-y-8 text-gray-800">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Nehetek Technology Solutions (&quot;Nehetek,&quot; &quot;we,&quot; &quot;our,&quot;
              or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit
              our website, use our services, or interact with us.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              By accessing our website, you agree to this Privacy Policy. If you do not agree,
              please discontinue use of our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-2">
              We may collect the following types of information:
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-4 mb-2">
              2.1. Personal Information You Provide
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Account credentials (if applicable)</li>
              <li>Any information you submit via forms, requests, or communications</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">
              2.2. Automatically Collected Information
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 mb-1">
              When you visit our website, we automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Pages viewed and referring URLs</li>
              <li>Log files and interaction data (clicks, scroll, session data)</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">
              2.3. Cookies &amp; Tracking Technologies
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              We use cookies, web beacons, analytics tools (such as Google Analytics), and
              performance and security tools to understand usage, improve performance, and protect
              our services. You may disable cookies in your browser settings, but some features of
              the site may not function properly.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-2">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Provide, operate, and maintain Nehetek services</li>
              <li>Improve website performance and user experience</li>
              <li>Respond to inquiries, support requests, and communication</li>
              <li>Send administrative updates or service-related notices</li>
              <li>Secure and protect the website from malicious behavior</li>
              <li>Conduct analytics and usage monitoring</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              We do <span className="font-semibold">not</span> sell your personal information.
            </p>
          </section>

          {/* 4. How We Share Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. How We Share Your Information
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-2">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-3 mb-1">4.1. Service Providers</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              We engage trusted third-party vendors to assist with hosting, cloud infrastructure,
              analytics, email delivery, security, and website operations. These providers are
              permitted to process your data only as necessary to perform services on our behalf.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-3 mb-1">4.2. Legal Requirements</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              We may disclose your information if required to do so by law or in response to valid
              requests by public authorities (e.g., a court or government agency), or to protect the
              rights, property, or safety of Nehetek, our users, or others.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mt-3 mb-1">4.3. Business Transfers</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              In connection with any merger, acquisition, financing, or sale of company assets, your
              information may be transferred to another entity as part of the transaction, subject
              to this Privacy Policy.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              We do <span className="font-semibold">not</span> sell data to advertisers or unrelated
              third parties.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Retention</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              We retain personal data only as long as is reasonably necessary for the purposes
              described in this policy, including providing services, complying with legal
              obligations, resolving disputes, maintaining security, and improving our offerings.
              You may request deletion of your data at any time (see Section 10).
            </p>
          </section>

          {/* 6. Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              We implement industry-standard security measures to protect your information, such as
              TLS/HTTPS encryption, firewall and DDoS protection, access controls, authentication,
              regular software updates, and secure storage practices. While we strive to use
              commercially acceptable means to protect your personal data, no method of transmission
              over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          {/* 7. Third-Party Links */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Third-Party Links</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Our website may contain links to third-party websites or services. We are not
              responsible for the content, security, or privacy practices of those third parties.
              We encourage you to review the privacy policies of any third-party site you visit.
            </p>
          </section>

          {/* 8. Children’s Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children’s Privacy</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Our services are not directed to children under the age of 13, and we do not knowingly
              collect personal information from children. If you believe that a child has provided
              us with personal information, please contact us so that we can delete the information.
            </p>
          </section>

          {/* 9. Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Your Rights</h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or updates to your information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing or certain processing</li>
              <li>Restrict or object to data processing in certain circumstances</li>
              <li>Request a copy of your data in a portable format (data portability)</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              To exercise these rights, contact us at:{' '}
              <a
                href="mailto:privacy@nehetek.com"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                privacy@nehetek.com
              </a>{' '}
              or{' '}
              <a
                href="mailto:support@nehetek.com"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                support@nehetek.com
              </a>
              .
            </p>
          </section>

          {/* 10. How to Request Deletion */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. How to Request Deletion
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              To request deletion of your personal data, please send an email including your name,
              email address, and a brief description of the data you wish to remove to:{' '}
              <a
                href="mailto:privacy@nehetek.com"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                privacy@nehetek.com
              </a>
              . We will review and respond to your request within a reasonable time, typically within
              30 days.
            </p>
          </section>

          {/* 11. International Data Transfers */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. International Data Transfers
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              If you access Nehetek services from outside the United States, your data may be
              transferred to, stored in, and processed in the United States or other jurisdictions
              where our service providers are located. These locations may have data protection laws
              that differ from those in your country, but we take steps to ensure an appropriate
              level of protection for your information.
            </p>
          </section>

          {/* 12. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technologies, legal requirements, or other factors. When we make changes,
              we will update the &quot;Last Updated&quot; date at the top of this page. Your
              continued use of the website following the posting of changes constitutes acceptance
              of those changes.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Contact Us</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              If you have any questions about this Privacy Policy or our data protection practices,
              please contact us at:
            </p>
            <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800">
              <p className="font-medium text-gray-900">Nehetek Technology Solutions</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:support@nehetek.com"
                  className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
                >
                  support@nehetek.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a
                  href="https://nehetek.com"
                  className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
                >
                  https://nehetek.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
