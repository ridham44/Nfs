import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { companies } from '../data/companies';
import { getModelsByCompany } from '../data/models';
import { bannerImages, logoImages, modelImages, onlineModelImages } from '../data/images';
import '../App.css';

// ── Powertrain icon map
const ptIcon = { Petrol: '⛽', Hybrid: '⚡⛽', Electric: '⚡' };

// ── Gradient palette per company
const gradients = {
  bugatti:     'linear-gradient(135deg, #0a0a12 0%, #121230 60%, #050508 100%)',
  ferrari:     'linear-gradient(135deg, #120505 0%, #2a0808 60%, #080202 100%)',
  lamborghini: 'linear-gradient(135deg, #0e0c00 0%, #1e1800 60%, #080600 100%)',
  rollsroyce:  'linear-gradient(135deg, #0a0813 0%, #1a1228 60%, #050308 100%)',
  astonmartin: 'linear-gradient(135deg, #020e06 0%, #041808 60%, #020804 100%)',
  koenigsegg:  'linear-gradient(135deg, #0d0800 0%, #201400 60%, #080500 100%)',
  porsche:     'linear-gradient(135deg, #0a0a0a 0%, #181818 60%, #050505 100%)',
  mclaren:     'linear-gradient(135deg, #0d0700 0%, #1e1000 60%, #080400 100%)',
  pagani:      'linear-gradient(135deg, #00080d 0%, #001520 60%, #000408 100%)',
  pininfarina: 'linear-gradient(135deg, #120004 0%, #250008 60%, #080002 100%)',
  maserati:    'linear-gradient(135deg, #000a12 0%, #001a28 60%, #000408 100%)',
  rimac:       'linear-gradient(135deg, #020d05 0%, #051a08 60%, #020802 100%)',
};

export default function CompanyPage() {
  const { companyId } = useParams();
  const company = companies[companyId];

  const [filterPowertrain, setFilterPowertrain] = useState('All');
  const [filterBody, setFilterBody] = useState('All');
  const [sortBy, setSortBy] = useState('year');

  // All hooks must be called unconditionally — before any early return
  const allModels = useMemo(
    () => (company ? getModelsByCompany(companyId) : []),
    [companyId, company]
  );

  const powertrains = useMemo(() => {
    const set = new Set(allModels.map((m) => m.powertrain));
    return ['All', ...Array.from(set)];
  }, [allModels]);

  const bodyTypes = useMemo(() => {
    const set = new Set(allModels.map((m) => m.bodyType));
    return ['All', ...Array.from(set)];
  }, [allModels]);

  const filtered = useMemo(() => {
    let list = [...allModels];
    if (filterPowertrain !== 'All') list = list.filter((m) => m.powertrain === filterPowertrain);
    if (filterBody !== 'All') list = list.filter((m) => m.bodyType === filterBody);
    if (sortBy === 'year') list.sort((a, b) => b.year - a.year);
    if (sortBy === 'price') list.sort((a, b) => b.priceRaw - a.priceRaw);
    if (sortBy === 'speed') list.sort((a, b) => b.topSpeed - a.topSpeed);
    if (sortBy === 'power') list.sort((a, b) => b.horsepower - a.horsepower);
    return list;
  }, [allModels, filterPowertrain, filterBody, sortBy]);

  const resetFilters = () => { setFilterPowertrain('All'); setFilterBody('All'); setSortBy('year'); };

  if (!company) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>BRAND NOT FOUND</h2>
          <Link to="/" className="button">Return Home</Link>
        </div>
        <Footer />
      </>
    );
  }


  const bannerImg = bannerImages[company.bannerKey] || null;
  const logoImg = company.logoKey ? logoImages[company.logoKey] : null;
  const gradient = gradients[companyId] || gradients.porsche;
  const accentColor = company.accentColor || '#fff';

  return (
    <>
      <Navbar />

      {/* ── HERO BANNER ─────────────────────────────────── */}
      <section
        className="cp-hero"
        style={{
          background: gradient,
          '--accent': accentColor,
        }}
      >
        {bannerImg && (
          <img src={bannerImg} alt={company.name} className="cp-hero__bg" />
        )}
        <div className="cp-hero__overlay" />
        <div className="cp-hero__content container">
          {logoImg && (
            <img src={logoImg} alt={`${company.name} logo`} className="cp-hero__logo" />
          )}
          <p className="cp-hero__tagline">{company.tagline}</p>
          <h1 className="cp-hero__name">{company.name.toUpperCase()}</h1>
          <div className="cp-hero__meta">
            <span>Est. {company.founded}</span>
            <span className="cp-hero__dot">·</span>
            <span>{company.country}</span>
            <span className="cp-hero__dot">·</span>
            <span>{company.parent}</span>
          </div>
        </div>
      </section>

      <main className="cp-main">
        {/* ── BRAND INFO ──────────────────────────────────── */}
        <section className="cp-info container">
          <div className="cp-info__grid">
            <div className="cp-info__desc">
              <p className="overline">About the Brand</p>
              <p className="cp-info__text">{company.description}</p>
            </div>
            <div className="cp-info__stats">
              {[
                { label: 'Founded', value: company.founded },
                { label: 'Founder', value: company.founder },
                { label: 'Headquarters', value: company.headquarters },
                { label: 'Parent Company', value: company.parent },
                { label: 'Country', value: company.country },
                { label: 'Status', value: company.status },
              ].map(({ label, value }) => (
                <div key={label} className="cp-info__stat">
                  <span className="cp-info__stat-label">{label}</span>
                  <span className="cp-info__stat-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODEL FILTER BAR ────────────────────────────── */}
        <section className="cp-filter-bar container">
          <div className="cp-filter-header">
            <h2 className="cp-filter-title">
              Explore {company.name}
              <span className="cp-model-count">{filtered.length} model{filtered.length !== 1 ? 's' : ''}</span>
            </h2>
            {(filterPowertrain !== 'All' || filterBody !== 'All' || sortBy !== 'year') && (
              <button className="cp-clear-btn" onClick={resetFilters}>Clear Filters ×</button>
            )}
          </div>

          <div className="cp-filters">
            {/* Powertrain chips */}
            <div className="cp-filter-group">
              <span className="cp-filter-group-label">Powertrain</span>
              <div className="cp-chips">
                {powertrains.map((pt) => (
                  <button
                    key={pt}
                    className={`cp-chip ${filterPowertrain === pt ? 'cp-chip--active' : ''}`}
                    onClick={() => setFilterPowertrain(pt)}
                  >
                    {pt !== 'All' && ptIcon[pt]} {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Body type chips */}
            <div className="cp-filter-group">
              <span className="cp-filter-group-label">Type</span>
              <div className="cp-chips">
                {bodyTypes.map((bt) => (
                  <button
                    key={bt}
                    className={`cp-chip ${filterBody === bt ? 'cp-chip--active' : ''}`}
                    onClick={() => setFilterBody(bt)}
                  >
                    {bt}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="cp-filter-group">
              <span className="cp-filter-group-label">Sort</span>
              <div className="cp-chips">
                {[
                  { key: 'year', label: 'Newest' },
                  { key: 'price', label: 'Price' },
                  { key: 'speed', label: 'Top Speed' },
                  { key: 'power', label: 'Horsepower' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    className={`cp-chip ${sortBy === key ? 'cp-chip--active' : ''}`}
                    onClick={() => setSortBy(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MODEL GRID ──────────────────────────────────── */}
        <section className="cp-models container">
          {filtered.length === 0 ? (
            <div className="cp-no-results">
              <p>No models match the selected filters.</p>
              <button className="button" onClick={resetFilters}>Clear Filters</button>
            </div>
          ) : (
            <div className="cp-grid">
              {filtered.map((model) => {
                const imgSources = [onlineModelImages[model.id], modelImages[model.id]].filter(Boolean);
                return (
                  <ModelCard
                    key={model.id}
                    model={model}
                    imgSources={imgSources}
                    companyId={companyId}
                    accentColor={accentColor}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

// ── Sub-component: ModelCard
function ModelCard({ model, imgSources, companyId, accentColor }) {
  const [imgIndex, setImgIndex] = useState(0);
  const currentImg = imgSources && imgSources[imgIndex];

  return (
    <Link to={`/model/${companyId}/${model.id}`} className="mc-card glass-panel">
      <div className="mc-img-wrap">
        {currentImg ? (
          <img
            src={currentImg}
            alt={model.name}
            className="mc-img"
            loading="lazy"
            onError={() => setImgIndex((prev) => prev + 1)}
          />
        ) : (
          <div className="mc-img-placeholder">
            <span className="mc-placeholder-text">{model.name}</span>
          </div>
        )}
        <div className="mc-badge">
          <span>{model.year}</span>
          <span>{model.powertrain}</span>
        </div>
      </div>

      <div className="mc-body">
        <div className="mc-header">
          <h3 className="mc-name">{model.name}</h3>
          <span className="mc-body-type">{model.bodyType}</span>
        </div>

        <p className="mc-engine">{model.engine}</p>

        <div className="mc-stats">
          <div className="mc-stat">
            <span className="mc-stat-val">{model.acceleration}s</span>
            <span className="mc-stat-lbl">0–100</span>
          </div>
          <div className="mc-stat">
            <span className="mc-stat-val">{model.topSpeed}</span>
            <span className="mc-stat-lbl">km/h</span>
          </div>
          <div className="mc-stat">
            <span className="mc-stat-val">{model.horsepower.toLocaleString('en-US')}</span>
            <span className="mc-stat-lbl">hp</span>
          </div>
        </div>

        <div className="mc-footer">
          <span className="mc-price">{model.price}</span>
          <span className="mc-explore">Explore →</span>
        </div>
      </div>
    </Link>
  );
}
