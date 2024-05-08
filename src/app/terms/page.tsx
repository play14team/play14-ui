import Page from "@/components/layout/page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
}

export default function TermsOfService() {
  return (
    <Page name="Terms of Service">
      <div className="container">
        <p className="pt-70">
          Welcome to #play14 (the &quot;Conference&quot; or &quot;we&quot;), an
          unconference organized in different cities around the world. By
          accessing and using our website located at https://play14.org (the
          &quot;Site&quot;) and related services (collectively, the
          &quot;Services&quot;), you (the &quot;User&quot; or &quot;you&quot;)
          agree to be bound by these Terms of Service (the &quot;Terms&quot;).
          If you do not agree to these Terms, please do not use the Services.
        </p>
        <div className="pt-5">
          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old to use the Services. If you are
            under 18, you may use the Services only with the involvement of a
            parent or guardian.
          </p>
        </div>
        <div className="pt-5">
          <h2>2. Tickets and Fees</h2>
          <p>
            The Conference is non-profit, but we sell tickets to cover the
            organization fees. The price of tickets may vary depending on
            various factors, such as the location of the Conference and the time
            of purchase.
          </p>
        </div>
        <div className="pt-5">
          <h2>3. Ticketing System</h2>
          <p>
            To attend an event, you will be requested to buy a ticket through a
            ticketing system (the &quot;Ticketing System&quot;). Each event
            organizing team may setup their own Ticketing System, depending on
            the country or region where the event is organized. The currency,
            ticket prices and fees will be adapted accordingly.
          </p>
        </div>
        <div className="pt-5">
          <h2>4. Refund Policy</h2>
          <p>
            By default, all ticket sales are final, and we do not offer refunds
            unless the Conference is cancelled or rescheduled. In such cases, we
            will notify you and provide you with a full refund of the ticket
            price. On a case by case basis, an event organizing team may decide
            to issue refund upon request.
          </p>
        </div>
        <div className="pt-5">
          <h2>5. User Content</h2>
          <p>
            The Services may allow you to upload, submit, or otherwise make
            available certain content, such as images, videos, and text
            (collectively, &quot;User Content&quot;). By uploading, submitting,
            or making available any User Content, you grant us a worldwide, non
            - exclusive, royalty - free, transferable, sublicensable license to
            use, reproduce, distribute, prepare derivative works of, display,
            and perform the User Content in connection with the Services and our
            business, including for promotional purposes. You represent and
            warrant that you have all the necessary rights to grant us this
            license and that your User Content does not violate any applicable
            laws or rights of third parties.
          </p>
        </div>
        <div className="pt-5">
          <h2>6. Prohibited Conduct</h2>
          <p>
            You may not use the Services for any illegal or unauthorized
            purpose. You agree not to engage in any of the following activities:
          </p>
          <p>
            <ul>
              <li>Violating any applicable laws or regulations;</li>
              <li>
                Interfering with or disrupting the Services or servers or
                networks connected to the Services;
              </li>
              <li>Transmitting any viruses, worms, or other malicious code;</li>
              <li>Infringing on the intellectual property rights of others;</li>
              <li>Harassing, threatening, or stalking others;</li>
              <li>
                Collecting or storing personal information about others without
                their consent;
              </li>
              <li>Creating false accounts or impersonating others;</li>
              <li>
                Using the Services for commercial purposes without our prior
                written consent; or
              </li>
              <li>
                Engaging in any other conduct that we determine, in our sole
                discretion, to be inappropriate or harmful to the Services or
                other users.
              </li>
            </ul>
          </p>
        </div>

        <div className="pt-5">
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate your account, player profile and
            access to the Services at any time, with or without cause, and with
            or without notice. Upon termination, your right to use the Services
            will immediately cease, and you will be required to delete any
            copies of the Services that you have downloaded or printed.
          </p>
        </div>

        <div className="pt-5">
          <h2>8. Disclaimers</h2>
          <p>
            The Services are provided &quot;as is&quot; and &quot;as
            available&quot;, without any warranties of any kind, express or
            implied. We disclaim all warranties, express or implied, including
            but not limited to, warranties of title, non - infringement,
            merchantability, and fitness for a particular purpose. We do not
            warrant that the Services will be uninterrupted, error - free, or
            secure, or that any defects will be corrected. We are not liable for
            any loss or damage arising from your use of the Services or your
            reliance on any information provided through the Services.
          </p>
        </div>

        <div className="pt-5">
          <h2>9. Limitation of Liability</h2>
          <p>
            In no event will we be liable to you or any third party for any
            special, punitive, incidental, indirect, or consequential damages of
            any kind, including but not limited to, damages for loss
          </p>
        </div>

        <div className="pt-5 pb-100">
          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws applicable in each event organizing
            country.
          </p>
        </div>
      </div>
    </Page>
  )
}
