export function InfoSections() {
    const sections = [
      { title: 'Artisane', content: 'Présentation de l artisanat et du savoir-faire.' },
      { title: 'Matière', content: 'Informations sur les matériaux utilisés comme la chaux et le béton ciré.' },
      { title: 'Rénover', content: 'Philosophie de la rénovation avec des matériaux respirants.' },
      { title: 'Femmes*', content: 'Engagement pour les femmes dans le BTP.' }
    ];
  
    return (
      <div className="info-sections" style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        {sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    );
  }