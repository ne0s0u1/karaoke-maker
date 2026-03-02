import React, { useState } from 'react';
import './index.css';
import './modal.css';
import './selection-modal.css';

const photoStylesList = [
  { id: 'Auto', name: 'Auto', img: null },
  { id: 'Flash Grain Snapshot', name: 'Flash Grain Snapshot', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop' },
  { id: 'Retro Jazz Blocks', name: 'Retro Jazz Blocks', img: 'https://images.unsplash.com/photo-1614605963284-8def0cfaad11?w=200&h=200&fit=crop' },
  { id: 'Epic Fantasy Concept Art', name: 'Epic Fantasy Concept Art', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop' },
  { id: 'Nineties Cel-Shaded', name: 'Nineties Cel-Shaded', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=200&h=200&fit=crop' },
  { id: 'Minimal Luxury Style', name: 'Minimal Luxury Style', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop' },
  { id: 'VHS Synthwave', name: 'VHS Synthwave', img: 'https://images.unsplash.com/photo-1621689254332-9c104aa8bb33?w=200&h=200&fit=crop' },
  { id: '90s Cosmic Color', name: '90s Cosmic Color', img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=200&fit=crop' },
  { id: 'Cozy Cafe Flat Lay', name: 'Cozy Cafe Flat Lay', img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=200&h=200&fit=crop' },
  { id: 'Hip Hop Ink Art', name: 'Hip Hop Ink Art', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop' },
];

const captionStylesList = [
  { id: 'Light Elegant', name: 'Light Elegant', desc: 'Light & Elegant', style: { color: 'white', textShadow: 'none', fontWeight: 'normal' } },
  { id: 'Simple Outline', name: 'Simple Outline', desc: 'Simple Black Stroke', style: { color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', fontWeight: 'bold' } },
  { id: 'Airy Regular', name: 'Airy Regular', desc: 'Airy & Natural', style: { color: 'white', fontWeight: '300' } },
  { id: 'Ocean Wave', name: 'Ocean Wave', desc: 'Blue Highlight Classic', style: { color: 'white', fontWeight: 'bold' }, highlight: '#3b82f6' },
  { id: 'Fire Bold', name: 'Fire Bold', desc: 'Red Highlight Bold', style: { color: 'white', fontWeight: 'bold' }, highlight: '#ef4444' },
  { id: 'Emerald Pop', name: 'Emerald Pop', desc: 'Green Highlight Modern', style: { color: 'white', fontWeight: 'bold' }, highlight: '#22c55e' },
];

const videos = [
  { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', time: '0:00 / 3:28' },
  { img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', time: '0:00 / 2:59' },
  { img: 'https://images.unsplash.com/photo-1614605963284-8def0cfaad11?q=80&w=600&auto=format&fit=crop', time: '0:00 / 2:48' },
  { img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop', time: '0:00 / 4:52' },
  { img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop', time: '0:00 / 7:32' },
  { img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&auto=format&fit=crop', time: '0:00 / 3:57' },
];

function App() {
  const [activeRatio, setActiveRatio] = useState('16:9');
  const [activeDisplayMode, setActiveDisplayMode] = useState('Single Image');
  const [activeCaptionAlignment, setActiveCaptionAlignment] = useState('Bottom');
  const [activeUpload, setActiveUpload] = useState(null);
  const [progresses, setProgresses] = useState(Array(6).fill(0));
  const [activeNav, setActiveNav] = useState('Karaoke Maker');
  const [isGenerated, setIsGenerated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [autoLyrics, setAutoLyrics] = useState(true);
  const [voiceVol, setVoiceVol] = useState(100);
  const [musicVol, setMusicVol] = useState(100);

  const [showPhotoStyleModal, setShowPhotoStyleModal] = useState(false);
  const [selectedPhotoStyle, setSelectedPhotoStyle] = useState('Auto');
  const [tempPhotoStyle, setTempPhotoStyle] = useState('Auto');

  const [showCaptionStyleModal, setShowCaptionStyleModal] = useState(false);
  const [selectedCaptionStyle, setSelectedCaptionStyle] = useState('Light Elegant');
  const [tempCaptionStyle, setTempCaptionStyle] = useState('Light Elegant');

  const handlePlay = (index) => {
    setProgresses(prev => {
      const next = [...prev];
      next[index] = (next[index] + 10) % 100;
      return next;
    });
  };

  const handleGenerate = () => {
    // Simulate generation process
    setIsGenerated(true);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <i className="ph-fill ph-music-notes custom-logo-icon"></i>
          <span className="logo-text">MusicCreator AI</span>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item">
            <i className="ph ph-music-note"></i><span>AI Music Generator</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-file-text"></i><span>AI Lyrics Generator</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-microphone-slash"></i><span>AI Vocal Remover</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-waveform"></i><span>AI Stem Splitter</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-microphone-stage"></i><span>AI Singing Voice Generator</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-vinyl-record"></i><span>AI Song Cover Generator</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-sliders"></i><span>AI Music Mastering</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-piano-keys"></i><span>AI MIDI Editor</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-arrows-left-right"></i><span>AI Audio to MIDI</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-hash"></i><span>Key & BPM Finder</span>
          </a>
          <a href="#" className="nav-item">
            <i className="ph ph-hand-tap"></i><span>BPM Tapper</span>
          </a>
          <a href="#" className={`nav-item ${activeNav === 'AI Music Video' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveNav('AI Music Video'); }}>
            <i className="ph ph-video"></i><span>AI Music Video</span>
          </a>
          <a href="#" className={`nav-item ${activeNav === 'Karaoke Maker' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveNav('Karaoke Maker'); }}>
            <i className="ph ph-microphone"></i><span>Karaoke Maker</span>
          </a>
          <div className="nav-divider"></div>
          <a href="#" className="nav-item">
            <i className="ph ph-currency-circle-dollar"></i><span>Pricing</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="collapse-btn">
            <i className="ph ph-caret-left"></i><span>Collapse Sidebar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="top-nav">
          <button className="lang-btn">
            <i className="ph ph-globe"></i><span>English</span>
          </button>
          <button className="sign-in-btn">Sign In</button>
        </div>

        <div className="content-wrapper">
          {/* Operations Area */}
          <section className="ops-area panel" style={{ backgroundColor: '#0f1115', borderRight: '1px solid var(--border-color)', borderTop: 'none', borderBottom: 'none', borderLeft: 'none', borderRadius: '0' }}>
            <div className="ops-scroll-content">
            <div className="ops-card">
              <span className="ops-card-title">Video Audio</span>
              <div className="ops-group" style={{ gap: '8px' }}>
                <button
                  className={`upload-btn primary ${activeUpload === 'local' ? 'active' : ''}`}
                  onClick={() => setActiveUpload('local')}
                >
                  <span className="icon-holder"><i className="ph ph-upload-simple"></i></span>
                  <div className="btn-text">
                    <span className="btn-title">Upload Music</span>
                    <span className="btn-desc">Support MP3, WAV, OGG, M4A, AAC, FLAC, WMA</span>
                  </div>
                  <i className="ph ph-caret-right" style={{ marginLeft: 'auto', color: 'var(--text-inactive)' }}></i>
                </button>
                <button
                  className={`upload-btn secondary ${activeUpload === 'workspace' ? 'active' : ''}`}
                  onClick={() => setActiveUpload('workspace')}
                >
                  <span className="icon-holder"><i className="ph-fill ph-music-note"></i></span>
                  <div className="btn-text">
                    <span className="btn-title">From My Music</span>
                    <span className="btn-desc" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><i className="ph ph-info"></i> No Audio Track Selected</span>
                  </div>
                  <i className="ph ph-caret-right" style={{ marginLeft: 'auto', color: 'var(--text-inactive)' }}></i>
                </button>
              </div>
            </div>

            <div className="ops-card">
              <span className="ops-card-title">Canvas Settings</span>
              <div className="ops-group" style={{ gap: '1px', backgroundColor: 'transparent', padding: 0, border: 'none', boxShadow: 'none' }}>
                <div className="ops-row" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: 'none' }}>
                  <label>Video Size</label>
                  <div className="ratio-options">
                    <button
                      className={`ratio-btn ${activeRatio === '16:9' ? 'active' : ''}`}
                      onClick={() => setActiveRatio('16:9')}
                    >
                      <div className="ratio-icon horizontal"></div>16:9
                    </button>
                    <button
                      className={`ratio-btn ${activeRatio === '9:16' ? 'active' : ''}`}
                      onClick={() => setActiveRatio('9:16')}
                    >
                      <div className="ratio-icon vertical"></div>9:16
                    </button>
                  </div>
                </div>

                <div className="ops-row" style={{ borderRadius: 0, borderBottom: 'none' }}>
                  <label>Display Mode</label>
                  <div className="segmented-control">
                    <button
                      className={`segmented-btn ${activeDisplayMode === 'Single Image' ? 'active' : ''}`}
                      onClick={() => setActiveDisplayMode('Single Image')}
                    >
                      Single Image
                    </button>
                    <button
                      className={`segmented-btn ${activeDisplayMode === 'Multiple Image' ? 'active' : ''}`}
                      onClick={() => setActiveDisplayMode('Multiple Image')}
                    >
                      Multiple Image
                    </button>
                  </div>
                </div>

                <div className="ops-row" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                  <label>Photo Style</label>
                  <div className="style-preview" onClick={() => {
                    setTempPhotoStyle(selectedPhotoStyle);
                    setShowPhotoStyleModal(true);
                  }}>
                    <span>{selectedPhotoStyle}</span>
                    <i className="ph ph-caret-up-down" style={{ fontSize: '14px', marginLeft: '4px' }}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="ops-card">
              <div className="ops-group" style={{ gap: '1px', backgroundColor: 'transparent', padding: 0, border: 'none', boxShadow: 'none' }}>
                <div className="ops-row" style={{ ...(!autoLyrics && activeUpload !== 'workspace' ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: 'none' } : {}), ...(activeUpload === 'workspace' ? { opacity: 0.6, pointerEvents: 'none' } : {}) }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Auto Recognize Lyrics</label>
                    {activeUpload === 'workspace' && (
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: '400' }}>
                        Lyrics with timestamps are automatically included from My Music.
                      </span>
                    )}
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={activeUpload === 'workspace' ? false : autoLyrics} onChange={(e) => setAutoLyrics(e.target.checked)} disabled={activeUpload === 'workspace'} />
                    <span className="slider"></span>
                  </label>
                </div>

                {!autoLyrics && activeUpload !== 'workspace' && (
                  <div className="ops-row" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px' }}>
                    <label style={{ width: '80px', marginTop: '16px', lineHeight: '1.4', flexShrink: 0 }}>Manual<br />Lyrics</label>
                    <textarea
                      placeholder="Enter your lyrics here..."
                      className="manual-lyrics-input"
                      style={{ flex: 1, minHeight: '80px', margin: 0, resize: 'vertical' }}
                    ></textarea>
                  </div>
                )}
              </div>
            </div>

            <div className="ops-card">
              <span className="ops-card-title">Captions Settings</span>
              <div className="ops-group" style={{ gap: '1px', backgroundColor: 'transparent', padding: 0, border: 'none', boxShadow: 'none' }}>
                <div className="ops-row" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottom: 'none' }}>
                  <label>Style</label>
                  <div className="style-preview" onClick={() => {
                    setTempCaptionStyle(selectedCaptionStyle);
                    setShowCaptionStyleModal(true);
                  }}>
                    <span style={{ fontSize: '13px' }}>{selectedCaptionStyle}</span>
                    <i className="ph ph-caret-up-down" style={{ fontSize: '14px', marginLeft: '4px' }}></i>
                  </div>
                </div>

                <div className="ops-row" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                  <label>Alignment</label>
                  <div className="segmented-control">
                    <button className={`segmented-btn ${activeCaptionAlignment === 'Top' ? 'active' : ''}`} onClick={() => setActiveCaptionAlignment('Top')}>Top</button>
                    <button className={`segmented-btn ${activeCaptionAlignment === 'Middle' ? 'active' : ''}`} onClick={() => setActiveCaptionAlignment('Middle')}>Middle</button>
                    <button className={`segmented-btn ${activeCaptionAlignment === 'Bottom' ? 'active' : ''}`} onClick={() => setActiveCaptionAlignment('Bottom')}>Bottom</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ops-card">
              <div className="ops-row" style={{ justifyContent: 'space-between' }}>
                <label>Sound Wave</label>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            </div>

            <div className="generate-wrapper">
              <button className="generate-btn" onClick={handleGenerate} style={{ borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--text-inactive)', border: 'none', padding: '16px' }}>
                Generate Video <i className="ph-fill ph-sparkle"></i> 10
              </button>
            </div>
          </section>

          {/* Right Panel: Showcase OR Generated Video */}
          <section className="showcase-area panel" style={{ backgroundColor: 'transparent', border: 'none', paddingLeft: 0 }}>
            {!isGenerated ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Templates</h2>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>0 Templates</span>
                </div>

                <div className="video-grid">
                  {videos.map((vid, idx) => (
                    <div className="video-card" key={idx}>
                      <div className="video-thumbnail" style={{ backgroundImage: `url('${vid.img}')` }}>
                        <button className="play-btn" onClick={() => handlePlay(idx)}>
                          <i className="ph-fill ph-play"></i>
                        </button>
                        <div className="video-controls">
                          <div className="progress-bar">
                            <div className="progress" style={{ width: `${progresses[idx]}%` }}></div>
                          </div>
                          <div className="control-bottom">
                            <div className="time-info"><i className="ph ph-speaker-high"></i> {vid.time}</div>
                            <button className="fullscreen-btn"><i className="ph ph-corners-out"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '600' }}>My Videos</h2>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>47 Videos</span>
                </div>

                <div className="video-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {[...Array(9)].map((_, idx) => (
                    <div className="generated-video-card" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: 'none' }} key={idx} onClick={() => setShowModal(true)}>
                      <div className="video-thumbnail" style={{ backgroundImage: `url('${videos[idx % videos.length].img}')`, aspectRatio: '16/9', borderRadius: '12px 12px 0 0', position: 'relative' }}>
                      </div>
                      <div className="generated-video-info" style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Liquid Dream {idx + 1}</h3>
                          <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>01/26/2026 01:35:31 PM</p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', color: 'var(--text-secondary)' }}>
                          <button><i className="ph-fill ph-folder-simple-plus"></i></button>
                          <button><i className="ph-fill ph-trash"></i></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-video-section">
              <div className="modal-video-player" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621689254332-9c104aa8bb33?q=80&w=800&auto=format&fit=crop')` }}>
                <button className="play-btn modal-play-btn"><i className="ph-fill ph-play"></i></button>
                <div className="video-controls">
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `0%` }}></div>
                  </div>
                  <div className="control-bottom">
                    <div className="time-info"><i className="ph ph-speaker-high"></i> 0:00 / 5:01</div>
                    <button className="fullscreen-btn"><i className="ph ph-corners-out"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-details-section" style={{ display: 'flex', flexDirection: 'column', padding: '24px', flex: '1 1 350px', overflow: 'hidden' }}>
              <div className="modal-header" style={{ alignItems: 'flex-start', borderBottom: 'none', padding: '0 0 16px 0', marginBottom: '16px', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} alt="Avatar" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>waterelevens</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>01/26/2026 01:35:31 PM</span>
                  </div>
                </div>
                <button className="close-btn" onClick={() => setShowModal(false)} style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph ph-x"></i></button>
              </div>

              <div className="modal-details-body" style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '6px', backgroundColor: 'var(--brand-primary)', flexShrink: 0 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Saltwater Letters</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Indie Pop, Female Voice, Dreamy, Soft Drums, Clean Guitar, Airy Synths, Heartfelt</span>
                  </div>
                </div>

                <div className="detail-panel mixing-panel">
                  <div className="mixing-header-row">
                    <h4 className="detail-panel-title" style={{ marginBottom: 0 }}>Karaoke Mixing</h4>
                    <span className="mixing-subtitle">Audio Balance</span>
                  </div>

                  <div className="volume-controls" style={{ marginTop: '12px', marginBottom: '0' }}>

                  <div className="volume-row" style={{ marginBottom: '16px' }}>
                    <div className="volume-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <i className="ph ph-microphone-stage" style={{ fontSize: '16px', color: 'var(--brand-primary)' }}></i>
                        <span>Vocals Volume</span>
                      </div>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{voiceVol}%</span>
                    </div>
                    <input type="range" min="0" max="200" value={voiceVol} onChange={e => setVoiceVol(e.target.value)} className="custom-slider" />
                  </div>

                  <div className="volume-row">
                    <div className="volume-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <i className="ph ph-music-notes" style={{ fontSize: '16px', color: '#a5b4fc' }}></i>
                        <span>Instruments Volume</span>
                      </div>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{musicVol}%</span>
                    </div>
                    <input type="range" min="0" max="200" value={musicVol} onChange={e => setMusicVol(e.target.value)} className="custom-slider" />
                  </div>
                </div>
                </div>

                <div className="detail-panel params-panel">
                  <h4 className="detail-panel-title">Generation Detail</h4>
                  <div className="generation-detail" style={{ borderTop: 'none', paddingTop: '0' }}>
                    <div className="detail-row">
                      <span className="detail-label">Display Mode</span>
                      <span className="detail-value">Single Image</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Photo Style</span>
                      <span className="detail-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=40&h=40&fit=crop" style={{ width: '18px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} alt="style" />
                        Flash Grain Snapshot
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Video Size</span>
                      <span className="detail-value">16:9</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Captions Style</span>
                      <span className="detail-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ padding: '2px 4px', backgroundColor: '#111', borderRadius: '4px', fontSize: '7px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.0, transform: 'scale(0.9)', origin: 'center' }}>
                          <span>BOB LENGTH</span>
                          <span style={{ color: 'var(--brand-primary)' }}>HAIRCUTS</span>
                        </span>
                        Light Elegant
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Captions Alignment</span>
                      <span className="detail-value">Bottom</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Show Sound Wave</span>
                      <span className="detail-value">On</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px', flexShrink: 0 }}>
                <button className="remix-btn" style={{ backgroundColor: 'white', color: 'black', borderRadius: '24px', padding: '14px', fontWeight: 'bold' }}>Remix This Music Video</button>
                <div className="modal-actions" style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                  <button className="action-btn" style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}><i className="ph-fill ph-thumbs-up"></i> 35</button>
                  <button className="action-btn" style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}><i className="ph-fill ph-thumbs-down"></i> 1</button>
                  <button className="action-btn" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', width: '40px', padding: 0 }}><i className="ph-fill ph-folder-simple-plus"></i></button>
                  <button className="action-btn" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', width: '40px', padding: 0 }}><i className="ph-fill ph-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Photo Style Selection Modal */}
      {showPhotoStyleModal && (
        <div className="modal-overlay" onClick={() => setShowPhotoStyleModal(false)} style={{ zIndex: 200, padding: '20px' }}>
          <div className="selection-modal" onClick={(e) => e.stopPropagation()}>
            <div className="selection-modal-header">
              <h3 className="selection-modal-title">Select Photo Style</h3>
              <button className="close-btn" onClick={() => setShowPhotoStyleModal(false)}>
                <i className="ph ph-x"></i>
              </button>
            </div>
            <div className="selection-modal-body">
              <div className="photo-style-grid">
                {photoStylesList.map(style => (
                  <div
                    key={style.id}
                    className={`photo-style-item ${tempPhotoStyle === style.id ? 'active' : ''}`}
                    onClick={() => setTempPhotoStyle(style.id)}
                  >
                    <div
                      className="photo-style-thumb"
                      style={style.img ? { backgroundImage: `url('${style.img}')` } : { backgroundColor: '#c7d2fe', color: '#312e81' }}
                    >
                      {!style.img && 'Auto'}
                    </div>
                    <span className="photo-style-name">{style.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="selection-modal-footer">
              <button className="modal-btn cancel" onClick={() => setShowPhotoStyleModal(false)}>Cancel</button>
              <button className="modal-btn confirm" onClick={() => {
                setSelectedPhotoStyle(tempPhotoStyle);
                setShowPhotoStyleModal(false);
              }}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Caption Style Selection Modal */}
      {showCaptionStyleModal && (
        <div className="modal-overlay" onClick={() => setShowCaptionStyleModal(false)} style={{ zIndex: 200, padding: '20px' }}>
          <div className="selection-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
            <div className="selection-modal-header">
              <h3 className="selection-modal-title">Select Captions Style</h3>
              <button className="close-btn" onClick={() => setShowCaptionStyleModal(false)}>
                <i className="ph ph-x"></i>
              </button>
            </div>
            <div className="selection-modal-body">
              <div className="caption-style-grid">
                {captionStylesList.map(style => (
                  <div
                    key={style.id}
                    className={`caption-style-item ${tempCaptionStyle === style.id ? 'active' : ''}`}
                    onClick={() => setTempCaptionStyle(style.id)}
                  >
                    <div className="caption-style-preview">
                      <span style={{ fontSize: '18px', ...style.style }}>BOB LENGTH</span>
                      <span style={{ fontSize: '18px', ...style.style, color: style.highlight || 'var(--text-primary)' }}>HAIRCUTS</span>
                    </div>
                    <div className="caption-style-info">
                      <span className="caption-style-name">{style.name}</span>
                      <span className="caption-style-desc">{style.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="selection-modal-footer">
              <button className="modal-btn cancel" onClick={() => setShowCaptionStyleModal(false)}>Cancel</button>
              <button className="modal-btn confirm" onClick={() => {
                setSelectedCaptionStyle(tempCaptionStyle);
                setShowCaptionStyleModal(false);
              }}>Confirm</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
