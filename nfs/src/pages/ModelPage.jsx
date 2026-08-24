import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { companies } from '../data/companies';
import { getModelById, getModelsByCompany } from '../data/models';
import { modelImages, bannerImages } from '../data/images';
import '../App.css';

export default function ModelPage() {
  const { companyId, modelId } = useParams();
  const model = getModelById(modelId);
  const company = companies[companyId];

  if (!model || !company) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>MODEL NOT FOUND</h2>
          <Link to={`/brand/${companyId}`} className="button">Back to {company?.name || 'Brand'}</Link>
        </div>
        <Footer />
      </>
    );
  }

  const img = modelImages[model.id] || null;
  const bannerImg = bannerImages[company.bannerKey] || null;
  const accentColor = company.accentColor || '#fff';

  // Related models (same company, excluding current)
  const related = getModelsByCompany(companyId)
    .filter((m) => m.id !== modelId)
    .slice(0, 4);

  const specs = [
    { label: 'Engine', value: model.engine },
    { label: 'Powertrain', value: model.powertrain },
    { label: 'Body Type', value: model.bodyType },
    { label: 'Year', value: model.year },
    { label: 'Power Output', value: `${model.horsepower} hp` },
    { label: 'Top Speed', value: `${model.topSpeed} km/h` },
    { label: 'Acceleration', value: `0–100 in ${model.acceleration}s` },
    { label: 'Price', value: model.price },
  ];

  return (
    <>
      <Navbar />

      {/* ── CINEMATIC HERO ──────────────────────────────── */}
      <section className="mp-hero" style={{ '--accent': accentColor }}>
        {img ? (
          <img src={img} alt={model.name} className="mp-hero__bg" />
        ) : bannerImg ? (
          <img src={bannerImg} alt={company.name} className="mp-hero__bg" />
        ) : (
          <div className="mp-hero__bg mp-hero__gradient" style={{ background: `linear-gradient(135deg, #050505 0%, #111 100%)` }} />
        )}
        <div className="mp-hero__overlay" />

        <div className="mp-hero__content container">
          <Link to={`/brand/${companyId}`} className="mp-back">
            ← {company.name}
          </Link>
          <p className="mp-hero__brand">{company.name.toUpperCase()}</p>
          <h1 className="mp-hero__name">{model.name}</h1>
          <p className="mp-hero__year">{model.year} · {model.bodyType}</p>

          {/* Hero stat strip */}
          <div className="mp-hero__strip glass-panel" style={{ '--glass-bg': 'rgba(0,0,0,0.4)', padding: '1.5rem 2rem' }}>
            <div className="mp-hero__stat">
              <span className="mp-hero__stat-val">{model.acceleration}s</span>
              <span className="mp-hero__stat-lbl">0 – 100 km/h</span>
            </div>
            <div className="mp-hero__divider" />
            <div className="mp-hero__stat">
              <span className="mp-hero__stat-val">{model.topSpeed} km/h</span>
              <span className="mp-hero__stat-lbl">Top Speed</span>
            </div>
            <div className="mp-hero__divider" />
            <div className="mp-hero__stat">
              <span className="mp-hero__stat-val">{model.horsepower} hp</span>
              <span className="mp-hero__stat-lbl">Power Output</span>
            </div>
            <div className="mp-hero__divider" />
            <div className="mp-hero__stat">
              <span className="mp-hero__stat-val">{model.price}</span>
              <span className="mp-hero__stat-lbl">Starting Price</span>
            </div>
          </div>
        </div>
      </section>

      <main className="mp-main">
        {/* ── OVERVIEW ──────────────────────────────────── */}
        <section className="mp-overview container">
          <div className="mp-overview__grid">
            {/* Description */}
            <div className="mp-overview__desc">
              <p className="overline">Overview</p>
              <h2 className="mp-overview__title">{model.name}</h2>
              <p className="mp-overview__text">{model.description}</p>

              <div className="mp-overview__tags">
                <span className="mp-tag">{model.powertrain}</span>
                <span className="mp-tag">{model.bodyType}</span>
                <span className="mp-tag">{model.year}</span>
              </div>
            </div>

            {/* Full spec table */}
            <div className="mp-specs glass-panel">
              <p className="overline" style={{ marginBottom: '1.5rem' }}>Specifications</p>
              {specs.map(({ label, value }) => (
                <div key={label} className="mp-spec-row">
                  <span className="mp-spec-label">{label}</span>
                  <span className="mp-spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LARGE IMAGE SHOWCASE ──────────────────────── */}
        {img && (
          <section className="mp-showcase">
            <div className="mp-showcase__inner">
              <img src={img} alt={`${model.name} showcase`} className="mp-showcase__img" />
              <div className="mp-showcase__caption">
                <span>{company.name} {model.name} · {model.year}</span>
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED MODELS ────────────────────────────── */}
        {related.length > 0 && (
          <section className="mp-related container">
            <p className="overline">More from {company.name}</p>
            <div className="mp-related__grid">
              {related.map((m) => {
                const rImg = modelImages[m.id] || null;
                return (
                  <Link key={m.id} to={`/model/${companyId}/${m.id}`} className="mp-rel-card">
                    <div className="mp-rel-img-wrap">
                      {rImg ? (
                        <img src={rImg} alt={m.name} className="mp-rel-img" />
                      ) : (
                        <div className="mc-img-placeholder" style={{ height: '100%' }}>
                          <span className="mc-placeholder-text">{m.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="mp-rel-body">
                      <h4 className="mp-rel-name">{m.name}</h4>
                      <span className="mp-rel-year">{m.year} · {m.horsepower} hp</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mp-related__cta">
              <Link to={`/brand/${companyId}`} className="button">
                View All {company.name} Models →
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
