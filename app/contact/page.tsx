import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section style={{
        display: 'flex',
        alignContent: 'space-between',
        flexDirection: 'column',
        minHeight: '70vh'
      }}>
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h1 style={{
            marginTop: '172px',
            textAlign: 'center'
          }}>
            What are you working on?
          </h1>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: 200
          }}>
            How can I help?
          </h1>

          <div style={{
            textAlign: 'center',
            fontSize: '1.6rem'
          }}>
            <p>
              <a
                style={{
                  marginTop: '0.3rem',
                  fontSize: '1.6rem'
                }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://cal.com/aaron-heine"
              >
                Book a meeting
              </a>
            </p>

            <p>
              <a
                style={{
                  marginTop: '0.3rem',
                  fontSize: '1.6rem'
                }}
                href="mailto:aaronheine@gmail.com"
              >
                Email aaronheine@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
