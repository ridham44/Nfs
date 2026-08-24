import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { companies } from '../data/companies';
import { getModelById, getModelsByCompany } from '../data/models';
import { modelImages, bannerImages, onlineModelImages } from '../data/images';
import '../App.css';

export default function ModelPage() {
  const { companyId, modelId } = useParams();
  const [heroImgIndex, setHeroImgIndex] = useState(0);
  
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

  const imgSources = [onlineModelImages[model.id], modelImages[model.id]].filter(Boolean);
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
    { label: 'Power Output', value: `${model.horsepower.toLocaleString('en-US')} hp` },
    { label: 'Top Speed', value: `${model.topSpeed} km/h` },
    { label: 'Acceleration', value: `0–100 in ${model.acceleration}s` },
    { label: 'Price', value: model.price },
  ];

  return (
    <>
      <Navbar />

      {/* ── CINEMATIC HERO ──────────────────────────────── */}
      <section className="mp-hero" style={{ '--accent': accentColor }}>
        {imgSources[heroImgIndex] ? (
          <img src={imgSources[heroImgIndex]} alt={model.name} className="mp-hero__bg" onError={() => setHeroImgIndex((prev) => prev + 1)} />
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
              <span className="mp-hero__stat-val">{model.horsepower.toLocaleString('en-US')} hp</span>
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

        {/* ── EDITORIAL / MORE INFO ─────────────────────── */}
        <section className="mp-editorial container">
          <h3 className="mp-editorial__heading">More About the {model.name}</h3>

          <p className="mp-editorial__character">
            {model.drivingCharacter || `Built around extreme performance and aerodynamic efficiency, the ${model.name} combines enormous power with a level of refinement expected from a premium ${model.bodyType.toLowerCase()}.`}
          </p>

          <div className="mp-editorial__grid">
            {/* Performance Card */}
            <div className="mp-info-card glass-panel">
              <h4 className="mp-info-card__title">Performance</h4>
              <ul className="mp-info-list">
                <InfoRow label="0–100 km/h" value={`${model.acceleration}s`} />
                {model.accel200 && <InfoRow label="0–200 km/h" value={model.accel200} />}
                <InfoRow label="Top Speed" value={`${model.topSpeed} km/h`} />
                <InfoRow label="Horsepower" value={`${model.horsepower.toLocaleString('en-US')} hp`} />
                {model.torque && <InfoRow label="Torque" value={model.torque} />}
                {model.weight && <InfoRow label="Weight" value={model.weight} />}
                {model.powerToWeight && <InfoRow label="Power-to-weight" value={model.powerToWeight} />}
              </ul>
            </div>

            {/* Powertrain Card */}
            <div className="mp-info-card glass-panel">
              <h4 className="mp-info-card__title">Powertrain</h4>
              <ul className="mp-info-list">
                <InfoRow label="Configuration" value={model.engine} />
                {model.displacement && <InfoRow label="Displacement" value={model.displacement} />}
                {model.cylinders && <InfoRow label="Cylinders" value={model.cylinders} />}
                {model.aspiration && <InfoRow label="Aspiration" value={model.aspiration} />}
                <InfoRow label="System" value={model.powertrain} />
                {model.hybridSystem && <InfoRow label="Hybrid System" value={model.hybridSystem} />}
                {model.electricMotor && <InfoRow label="Electric Motor" value={model.electricMotor} />}
              </ul>
            </div>
          </div>

          <div className="mp-editorial__grid-lower">
            {/* Design & Engineering */}
            <div className="mp-info-card glass-panel">
              <h4 className="mp-info-card__title">Design & Engineering</h4>
              <p className="mp-info-card__text">
                {model.designEngineering || `Every aspect of the ${model.name}'s architecture is shaped by a pursuit of maximum performance. Blending lightweight materials with advanced aerodynamic profiles, engineers have delivered unparalleled stability at high speeds without compromising the distinctive ${company.name} design language.`}
              </p>
            </div>

            {/* Production / Exclusivity */}
            <div className="mp-info-card glass-panel">
              <h4 className="mp-info-card__title">Production & Exclusivity</h4>
              <ul className="mp-info-list">
                <InfoRow label="Launch Year" value={model.year} />
                {model.productionNumbers && <InfoRow label="Production Run" value={model.productionNumbers} />}
                {model.specialEdition && <InfoRow label="Special Edition" value={model.specialEdition} />}
                {model.significance && <InfoRow label="Significance" value={model.significance} />}
              </ul>
            </div>
          </div>
        </section>

        {/* ── RELATED MODELS ────────────────────────────── */}
        {related.length > 0 && (
          <section className="mp-related container">
            <p className="overline">More from {company.name}</p>
            <div className="mp-related__grid">
              {related.map((m) => {
                const rImgSources = [onlineModelImages[m.id], modelImages[m.id]].filter(Boolean);
                return <RelatedCard key={m.id} m={m} imgSources={rImgSources} companyId={companyId} />;
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


// ── Sub-component: RelatedCard
function RelatedCard({ m, imgSources, companyId }) {
  const [imgIndex, setImgIndex] = useState(0);
  const currentImg = imgSources && imgSources[imgIndex];

  return (
    <Link to={`/model/${companyId}/${m.id}`} className="mp-rel-card">
      <div className="mp-rel-img-wrap">
        {currentImg ? (
          <img
            src={currentImg}
            alt={m.name}
            className="mp-rel-img"
            loading="lazy"
            onError={() => setImgIndex((prev) => prev + 1)}
          />
        ) : (
          <div className="mc-img-placeholder" style={{ height: '100%' }}>
            <span className="mc-placeholder-text">{m.name}</span>
          </div>
        )}
      </div>
      <div className="mp-rel-body">
        <h4 className="mp-rel-name">{m.name}</h4>
        <span className="mp-rel-year">{m.year} · {m.horsepower.toLocaleString('en-US')} hp</span>
      </div>
    </Link>
  );
}

// ── Sub-component: InfoRow — label/value pair for the editorial info cards
function InfoRow({ label, value }) {
  return (
    <li className="mp-info-row">
      <span className="mp-info-row__label">{label}</span>
      <span className="mp-info-row__value">{value}</span>
    </li>
  );
}
