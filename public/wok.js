/* Web of Knowledge Engine - Sailor Success */
(function() {
'use strict';

var WOK = {
  articles: [
    { id: 'coc-guide', title: 'Certificate of Competency (COC) Guide 2026', url: '/learn/certificate-of-competency-guide-2026/', tags: ['COC','STCW','Certification','Career'], excerpt: 'Complete guide to getting your COC from DG Shipping India.', readTime: '12 min' },
    { id: 'gp-rating', title: 'GP Rating Course: Complete Guide', url: '/learn/gp-rating-course/', tags: ['GP Rating','Training','Entry Level','Career'], excerpt: 'Everything about the General Purpose Rating course.', readTime: '8 min' },
    { id: 'watchkeeping', title: 'STCW Watchkeeping Certificate Guide', url: '/learn/stcw-watchkeeping/', tags: ['STCW','Watchkeeping','Certification'], excerpt: 'How to obtain your STCW watchkeeping certificate.', readTime: '7 min' },
    { id: 'dg-shipping', title: 'DG Shipping: Everything You Need to Know', url: '/learn/dg-shipping-guide/', tags: ['DG Shipping','Regulations','India'], excerpt: 'Understanding the Directorate General of Shipping.', readTime: '10 min' },
    { id: 'mmd-registration', title: 'MMD Registration Process Explained', url: '/learn/mmd-registration/', tags: ['MMD','Registration','Documentation'], excerpt: 'Step-by-step guide to registering with the MMD.', readTime: '6 min' },
    { id: 'cadetship', title: 'Cadetship Programs: Deck vs Engine', url: '/learn/cadetship-programs/', tags: ['Cadet','Training','Career','Deck','Engine'], excerpt: 'Compare deck and engine cadetship programs.', readTime: '9 min' },
    { id: 'imu-cet', title: 'IMU CET 2026: Complete Preparation Guide', url: '/learn/imu-cet-guide/', tags: ['IMU CET','Entrance Exam','Education'], excerpt: 'How to crack the Indian Maritime University CET.', readTime: '11 min' },
    { id: 'salary-guide', title: 'Merchant Navy Salary Guide 2026', url: '/learn/merchant-navy-salary/', tags: ['Salary','Career','Finance'], excerpt: 'Comprehensive salary data for all ranks.', readTime: '8 min' },
    { id: 'medical-fitness', title: 'Medical Fitness for Merchant Navy', url: '/learn/medical-fitness/', tags: ['Medical','ENG1','PEME','Health'], excerpt: 'Medical standards and how to pass your seafarer medical.', readTime: '7 min' },
    { id: 'dns-course', title: 'DNS Course: Pre-Sea Training Guide', url: '/learn/dns-course/', tags: ['DNS','Pre-Sea','Training','Education'], excerpt: 'Diploma in Nautical Science pathway to deck officer.', readTime: '9 min' },
    { id: 'bsc-nautical', title: 'B.Sc Nautical Science vs DNS: Which to Choose?', url: '/learn/bsc-nautical-science/', tags: ['BSc','Nautical Science','Education','Career'], excerpt: 'Compare the two main pre-sea courses.', readTime: '8 min' },
    { id: 'sponsorship', title: 'How to Get Shipping Company Sponsorship', url: '/learn/shipping-sponsorship/', tags: ['Sponsorship','Career','Companies'], excerpt: 'Tips to secure a cadetship sponsorship.', readTime: '10 min' },
    { id: 'belt-course', title: 'BELT Course: Basic English Language Training', url: '/learn/belt-course/', tags: ['BELT','English','STCW','Training'], excerpt: 'Why the BELT certificate matters.', readTime: '5 min' },
    { id: 'firefighting', title: 'Advanced Firefighting Course for Seafarers', url: '/learn/advanced-firefighting/', tags: ['Firefighting','STCW','Safety','Training'], excerpt: 'STCW advanced firefighting training requirements.', readTime: '6 min' },
    { id: 'pscrb', title: 'PSCRB Certificate: Proficiency in Survival Craft', url: '/learn/pscrb-certificate/', tags: ['PSCRB','Survival','STCW','Safety'], excerpt: 'How to get your PSCRB certificate.', readTime: '6 min' },
    { id: 'mlc', title: 'Maritime Labour Convention (MLC) Rights Guide', url: '/learn/mlc-rights/', tags: ['MLC','Rights','Regulations','Welfare'], excerpt: 'Your rights as a seafarer under the MLC.', readTime: '9 min' },
    { id: 'flag-state', title: 'Flag State vs Port State Control Explained', url: '/learn/flag-state-psc/', tags: ['Flag State','PSC','Regulations','Compliance'], excerpt: 'The difference between flag state and PSC inspections.', readTime: '7 min' },
    { id: 'ism-code', title: 'ISM Code: A Practical Guide for Seafarers', url: '/learn/ism-code/', tags: ['ISM','Safety','Regulations','SMS'], excerpt: 'What the ISM Code means for your daily work.', readTime: '8 min' },
    { id: 'contract-guide', title: 'Understanding Your Seafarer Employment Contract', url: '/learn/seafarer-contract/', tags: ['Contract','MLC','Rights','Legal'], excerpt: 'Key clauses every seafarer must know.', readTime: '7 min' },
    { id: 'rank-guide', title: 'Merchant Navy Ranks: Complete Hierarchy Guide', url: '/learn/merchant-navy-ranks/', tags: ['Ranks','Career','Deck','Engine'], excerpt: 'Every rank in merchant navy explained.', readTime: '11 min' },
    { id: 'cdp', title: 'Career Development Plan for Seafarers', url: '/learn/career-development-plan/', tags: ['Career','Planning','Certification','Growth'], excerpt: 'How to plan your maritime career from cadet to captain.', readTime: '10 min' }
  ],
  glossary: [
    { term: 'COC', full: 'Certificate of Competency', definition: 'A certificate issued by DG Shipping that authorizes a seafarer to serve in a specific officer rank on a merchant vessel.', tag: 'Certification', articleId: 'coc-guide' },
    { term: 'STCW', full: 'Standards of Training, Certification and Watchkeeping', definition: 'The international convention that sets minimum qualification standards for masters, officers and watch personnel on seagoing merchant ships.', tag: 'Regulations', articleId: 'watchkeeping' },
    { term: 'DG Shipping', full: 'Directorate General of Shipping', definition: 'The apex body under the Ministry of Ports, Shipping and Waterways, Government of India, responsible for administration of merchant shipping.', tag: 'Regulations', articleId: 'dg-shipping' },
    { term: 'MMD', full: 'Mercantile Marine Department', definition: 'Regional offices under DG Shipping where seafarers register, obtain documents, and appear for examinations.', tag: 'Documentation', articleId: 'mmd-registration' },
    { term: 'GP Rating', full: 'General Purpose Rating', definition: 'An entry-level seafarer who can work on both deck and engine departments, trained for versatile shipboard duties.', tag: 'Ratings', articleId: 'gp-rating' },
    { term: 'DNS', full: 'Diploma in Nautical Science', definition: 'A one-year pre-sea training course that qualifies graduates for cadetship on merchant vessels as deck officer trainees.', tag: 'Education', articleId: 'dns-course' },
    { term: 'IMU CET', full: 'Indian Maritime University Common Entrance Test', definition: 'The national level entrance examination for admission to undergraduate maritime courses at IMU and affiliated institutes.', tag: 'Education', articleId: 'imu-cet' },
    { term: 'MLC', full: 'Maritime Labour Convention 2006', definition: 'An ILO convention establishing minimum working and living standards for all seafarers on ships engaged in international trade.', tag: 'Rights', articleId: 'mlc' },
    { term: 'ISM Code', full: 'International Safety Management Code', definition: 'An international standard for safe management and operation of ships, implemented through the SOLAS convention.', tag: 'Safety', articleId: 'ism-code' },
    { term: 'PSC', full: 'Port State Control', definition: 'The inspection of foreign ships in national ports to verify compliance with international regulations.', tag: 'Compliance', articleId: 'flag-state' },
    { term: 'PSCRB', full: 'Proficiency in Survival Craft and Rescue Boats', definition: 'An STCW mandatory certificate confirming competency in operating survival craft and rescue boats.', tag: 'Safety', articleId: 'pscrb' },
    { term: 'ENG1', full: 'Seafarer Medical Certificate', definition: 'The medical fitness certificate required for seafarers serving on UK-flagged vessels, issued by approved medical examiners.', tag: 'Medical', articleId: 'medical-fitness' },
    { term: 'PEME', full: 'Pre-Employment Medical Examination', definition: 'Medical examination before joining a vessel to ensure the seafarer is fit for duty, required by most shipping companies.', tag: 'Medical', articleId: 'medical-fitness' },
    { term: 'BELT', full: 'Basic English Language Training', definition: 'An STCW-required certificate demonstrating minimum English language proficiency for safety communications aboard ships.', tag: 'Training', articleId: 'belt-course' },
    { term: 'SMS', full: 'Safety Management System', definition: 'A structured and documented system enabling company personnel to implement the Company Safety and Environmental Protection Policy.', tag: 'Safety', articleId: 'ism-code' },
    { term: 'Watchkeeping', full: 'Navigational or Engine Watchkeeping', definition: 'The duty of maintaining a continuous watch on the bridge or in the engine room to ensure safe navigation and vessel operation.', tag: 'Operations', articleId: 'watchkeeping' },
    { term: 'Flag State', full: 'Flag State Administration', definition: 'The national authority responsible for regulating vessels that fly its flag, including certification of seafarers and vessel inspections.', tag: 'Regulations', articleId: 'flag-state' },
    { term: 'Cadetship', full: 'Maritime Cadetship Program', definition: 'A structured training program combining shore-based education with onboard sea service, leading to an officer Certificate of Competency.', tag: 'Training', articleId: 'cadetship' },
    { term: 'IMO', full: 'International Maritime Organization', definition: 'The United Nations specialized agency responsible for regulating shipping, including safety, environmental concerns and legal matters.', tag: 'Regulations', articleId: 'dg-shipping' },
    { term: 'SOLAS', full: 'Safety of Life at Sea', definition: 'The most important of all international treaties concerning the safety of merchant ships.', tag: 'Safety', articleId: 'ism-code' }
  ]
};

// Build lookup maps
WOK.articlesByTag = {};
WOK.articles.forEach(function(a) {
  a.tags.forEach(function(t) {
    if (!WOK.articlesByTag[t]) WOK.articlesByTag[t] = [];
    WOK.articlesByTag[t].push(a);
  });
});
WOK.glossaryByTerm = {};
WOK.glossary.forEach(function(g) { WOK.glossaryByTerm[g.term] = g; });
WOK.allTags = [];
WOK.articles.forEach(function(a) { a.tags.forEach(function(t) { if (WOK.allTags.indexOf(t) < 0) WOK.allTags.push(t); }); });
WOK.allTags.sort();
window.WOK = WOK;

// ===== SEARCH OVERLAY =====
function buildSearchOverlay() {
  if (document.querySelector('.wok-search-overlay')) return;
  var overlay = document.createElement('div');
  overlay.className = 'wok-search-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.innerHTML = '<div class="wok-search-box"><div class="wok-search-header"><span class="wok-search-icon">&#128269;</span><input class="wok-search-input" type="text" placeholder="Search articles, terms, topics..." autocomplete="off" id="wok-main-input"><button class="wok-search-close">ESC</button></div><div class="wok-search-results" id="wok-results"></div><div class="wok-search-footer"><span><kbd>&#8593;&#8595;</kbd> navigate</span><span><kbd>&#8629;</kbd> open</span><span><kbd>ESC</kbd> close</span></div></div>';
  document.body.appendChild(overlay);
  var input = overlay.querySelector('#wok-main-input');
  var results = overlay.querySelector('#wok-results');
  var activeIdx = -1;

  function open() { overlay.classList.add('wok-open'); setTimeout(function() { input.focus(); }, 50); activeIdx = -1; renderResults(''); }
  function close() { overlay.classList.remove('wok-open'); input.value = ''; }
  function hl(str, q) {
    if (!q) return str;
    var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return str.replace(re, '<mark class="wok-result-highlight">$1</mark>');
  }
  function renderResults(q) {
    var query = q.trim().toLowerCase();
    var arts = query ? WOK.articles.filter(function(a) { return a.title.toLowerCase().indexOf(query) >= 0 || a.tags.some(function(t) { return t.toLowerCase().indexOf(query) >= 0; }) || a.excerpt.toLowerCase().indexOf(query) >= 0; }) : WOK.articles.slice(0, 5);
    var gloss = query ? WOK.glossary.filter(function(g) { return g.term.toLowerCase().indexOf(query) >= 0 || g.full.toLowerCase().indexOf(query) >= 0 || g.definition.toLowerCase().indexOf(query) >= 0; }) : WOK.glossary.slice(0, 4);
    var html = '';
    if (!arts.length && !gloss.length) { results.innerHTML = '<div class="wok-no-results">No results for "' + q + '"</div>'; return; }
    if (arts.length) { html += '<div class="wok-result-section">ARTICLES (' + arts.length + ')</div>' + arts.map(function(a) { return '<a class="wok-result-item" href="' + a.url + '"><div class="wok-result-icon">&#128196;</div><div class="wok-result-body"><div class="wok-result-title">' + hl(a.title, query) + '</div><div class="wok-result-meta">' + a.tags.slice(0,2).join(' &middot; ') + ' &middot; ' + a.readTime + '</div></div><span class="wok-result-arrow">&rarr;</span></a>'; }).join(''); }
    if (gloss.length) { html += '<div class="wok-result-section">GLOSSARY (' + gloss.length + ')</div>' + gloss.map(function(g) { return '<div class="wok-result-item wok-glossary-item" data-term="' + g.term + '"><div class="wok-result-icon wok-glossary">&#128218;</div><div class="wok-result-body"><div class="wok-result-title">' + hl(g.term, query) + ': ' + hl(g.full, query) + '</div><div class="wok-result-meta">' + g.tag + '</div></div><span class="wok-result-arrow">&rarr;</span></div>'; }).join(''); }
    results.innerHTML = html;
    results.querySelectorAll('.wok-glossary-item').forEach(function(el) {
      el.addEventListener('click', function() { var g = WOK.glossaryByTerm[el.dataset.term]; if (g && g.articleId) { var a = WOK.articles.filter(function(x) { return x.id === g.articleId; })[0]; if (a) { close(); window.location.href = a.url; } } });
    });
  }
  input.addEventListener('input', function(e) { renderResults(e.target.value); });
  input.addEventListener('keydown', function(e) {
    var items = results.querySelectorAll('.wok-result-item');
    if (e.key === 'ArrowDown') { activeIdx = Math.min(activeIdx + 1, items.length - 1); items.forEach(function(el, i) { el.classList.toggle('wok-active', i === activeIdx); }); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { activeIdx = Math.max(activeIdx - 1, 0); items.forEach(function(el, i) { el.classList.toggle('wok-active', i === activeIdx); }); e.preventDefault(); }
    else if (e.key === 'Enter' && activeIdx >= 0) { var active = items[activeIdx]; if (active) { if (active.href) window.location.href = active.href; else active.click(); close(); } }
    else if (e.key === 'Escape') close();
  });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) close(); });
  overlay.querySelector('.wok-search-close').addEventListener('click', close);
  document.addEventListener('keydown', function(e) { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); open(); } if (e.key === 'Escape' && overlay.classList.contains('wok-open')) close(); });
  renderResults('');
  window.WOKSearch = { open: open, close: close };
}

// ===== NAV SEARCH BUTTON =====
function addNavSearchButton() {
  var nav = document.querySelector('header nav') || document.querySelector('.header-nav') || document.querySelector('header');
  if (!nav || document.querySelector('.wok-nav-search-btn')) return;
  var btn = document.createElement('button');
  btn.className = 'wok-nav-search-btn';
  btn.setAttribute('aria-label', 'Search');
  btn.innerHTML = '&#128269; Search <kbd>Ctrl+K</kbd>';
  btn.addEventListener('click', function() { if (window.WOKSearch) window.WOKSearch.open(); });
  nav.appendChild(btn);
}

// ===== TAG PAGE =====
function buildTagPage() {
  if (document.querySelector('.wok-tag-page')) return;
  var backdrop = document.createElement('div');
  backdrop.className = 'wok-tag-backdrop';
  var page = document.createElement('div');
  page.className = 'wok-tag-page';
  document.body.appendChild(backdrop);
  document.body.appendChild(page);
  function openTag(tag) {
    var articles = WOK.articlesByTag[tag] || [];
    var glossEntry = WOK.glossary.filter(function(g) { return g.term === tag || g.tag === tag; })[0];
    var artHtml = articles.length ? articles.map(function(a, i) { return '<a class="wok-tag-article" href="' + a.url + '"><div class="wok-tag-art-num">' + (i < 9 ? '0' + (i+1) : i+1) + '</div><div><div class="wok-tag-art-title">' + a.title + '</div><div class="wok-tag-art-excerpt">' + a.excerpt + '</div></div></a>'; }).join('') : '<div style="padding:20px;color:#6B7280">No articles for this tag yet.</div>';
    var glossHtml = glossEntry ? '<div class="wok-tag-glossary"><div class="wok-tag-glossary-title">&#128218; Definition: ' + glossEntry.term + '</div><div class="wok-tag-glossary-def"><strong>' + glossEntry.full + '</strong> &mdash; ' + glossEntry.definition + '</div></div>' : '';
    page.innerHTML = '<div class="wok-tag-header"><div><div style="font-size:11px;opacity:0.7;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px">Topic</div><div class="wok-tag-title">#' + tag + '</div></div><div class="wok-tag-count">' + articles.length + ' article' + (articles.length !== 1 ? 's' : '') + '</div><button class="wok-tag-close" aria-label="Close">&times;</button></div><div class="wok-tag-body">' + artHtml + glossHtml + '</div>';
    page.querySelector('.wok-tag-close').addEventListener('click', closeTag);
    page.classList.add('wok-tag-open');
    backdrop.classList.add('wok-tag-open');
  }
  function closeTag() { page.classList.remove('wok-tag-open'); backdrop.classList.remove('wok-tag-open'); }
  backdrop.addEventListener('click', closeTag);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && page.classList.contains('wok-tag-open')) closeTag(); });
  window.WOKTag = { open: openTag, close: closeTag };
}

// ===== WIRE ARTICLE TAGS =====
function wireArticleTags() {
  document.querySelectorAll('.article-tag, [class*="tag-pill"]').forEach(function(el) {
    var tagText = el.textContent.trim();
    el.dataset.wokTag = tagText;
    el.addEventListener('click', function(e) { e.preventDefault(); if (window.WOKTag) window.WOKTag.open(tagText); });
  });
}

// ===== TOOLTIP ENGINE =====
var _tooltip = null, _tooltipTimer = null, _hideTimer = null;
function buildTooltip() {
  if (document.querySelector('.wok-tooltip')) return;
  _tooltip = document.createElement('div');
  _tooltip.className = 'wok-tooltip';
  document.body.appendChild(_tooltip);
  _tooltip.addEventListener('mouseenter', function() { clearTimeout(_hideTimer); });
  _tooltip.addEventListener('mouseleave', function() { _hideTimer = setTimeout(hideTooltip, 200); });
}
function showTooltip(el, g) {
  var rect = el.getBoundingClientRect();
  var artUrl = '';
  if (g.articleId) { var art = WOK.articles.filter(function(a) { return a.id === g.articleId; })[0]; if (art) artUrl = art.url; }
  _tooltip.innerHTML = '<div class="wok-tooltip-header"><span class="wok-tooltip-term">' + g.term + '</span><span class="wok-tooltip-tag">' + g.tag + '</span></div><div class="wok-tooltip-body"><div class="wok-tooltip-def"><strong>' + g.full + '</strong> &mdash; ' + g.definition + '</div>' + (artUrl ? '<a class="wok-tooltip-link" href="' + artUrl + '">Read full guide &rarr;</a>' : '') + '</div>';
  _tooltip.style.left = Math.min(rect.left, window.innerWidth - 320) + 'px';
  if (rect.bottom + 200 > window.innerHeight) { _tooltip.style.top = ''; _tooltip.style.bottom = (window.innerHeight - rect.top + 8) + 'px'; } else { _tooltip.style.bottom = ''; _tooltip.style.top = (rect.bottom + 8) + 'px'; }
  _tooltip.classList.add('wok-tooltip-visible');
}
function hideTooltip() { if (_tooltip) _tooltip.classList.remove('wok-tooltip-visible'); }
function wrapKeywords(node) {
  if (node.nodeType === 3) {
    var terms = Object.keys(WOK.glossaryByTerm);
    var re = new RegExp('\\b(' + terms.map(function(t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'g');
    if (!re.test(node.textContent)) return;
    var parent = node.parentNode;
    if (!parent || ['A','SCRIPT','STYLE','CODE','PRE','H1','H2','H3'].indexOf(parent.tagName) >= 0) return;
    var span = document.createElement('span');
    var terms2 = Object.keys(WOK.glossaryByTerm);
    var re2 = new RegExp('\\b(' + terms2.map(function(t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'g');
    span.innerHTML = node.textContent.replace(re2, function(match) { var g = WOK.glossaryByTerm[match]; if (!g) return match; return '<span class="wok-keyword" data-term="' + match + '">' + match + '</span>'; });
    parent.replaceChild(span, node);
  } else if (node.nodeType === 1 && ['SCRIPT','STYLE','CODE','PRE'].indexOf(node.tagName) < 0) {
    Array.from(node.childNodes).forEach(wrapKeywords);
  }
}
function wireTooltips() {
  buildTooltip();
  var content = document.querySelector('.content-main') || document.querySelector('.article-content') || document.querySelector('main');
  if (content) wrapKeywords(content);
  document.addEventListener('mouseover', function(e) {
    var kw = e.target.closest ? e.target.closest('.wok-keyword') : null;
    if (!kw) return;
    clearTimeout(_hideTimer);
    _tooltipTimer = setTimeout(function() { var g = WOK.glossaryByTerm[kw.dataset.term]; if (g) showTooltip(kw, g); }, 220);
  });
  document.addEventListener('mouseout', function(e) {
    var kw = e.target.closest ? e.target.closest('.wok-keyword') : null;
    if (!kw) return;
    clearTimeout(_tooltipTimer);
    _hideTimer = setTimeout(hideTooltip, 200);
  });
}

// ===== RELATED ARTICLES =====
function buildRelatedArticles() {
  var contentMain = document.querySelector('.content-main');
  if (!contentMain || document.querySelector('.wok-related')) return;
  var path = window.location.pathname;
  var current = WOK.articles[0];
  WOK.articles.forEach(function(a) { if (path.indexOf(a.id) >= 0 || path.indexOf(a.url.replace(/\//g,'').replace(/-/g,'')) >= 0) current = a; });
  var scored = WOK.articles.filter(function(a) { return a.id !== current.id; }).map(function(a) { var shared = a.tags.filter(function(t) { return current.tags.indexOf(t) >= 0; }).length; return { article: a, score: shared }; }).sort(function(a, b) { return b.score - a.score; });
  var related = scored.slice(0, 3).map(function(s) { return s.article; });
  var nextRead = related[0] || WOK.articles[1];
  var relHtml = related.map(function(a) { return '<a class="wok-related-card" href="' + a.url + '"><div class="wok-related-card-tag">' + a.tags[0] + '</div><div class="wok-related-card-title">' + a.title + '</div><div class="wok-related-card-read">&#9201; ' + a.readTime + ' read</div></a>'; }).join('');
  var container = document.createElement('div');
  container.className = 'wok-related';
  container.innerHTML = '<div class="wok-related-heading">&#128218; Keep Learning</div><div class="wok-related-grid">' + relHtml + '</div><a class="wok-next-read" href="' + nextRead.url + '"><div><div class="wok-next-label">Next Read &rarr;</div><div class="wok-next-title">' + nextRead.title + '</div></div><span class="wok-next-arrow">&rarr;</span></a>';
  contentMain.appendChild(container);
}

// ===== SIDEBAR WIDGETS =====
function buildSidebarWidgets() {
  var sidebar = document.querySelector('.article-sidebar') || document.querySelector('aside');
  if (!sidebar || document.querySelector('.wok-sidebar-widget')) return;
  var tagCloud = document.createElement('div');
  tagCloud.className = 'wok-sidebar-widget';
  tagCloud.innerHTML = '<div class="wok-sidebar-widget-title">&#127991; Browse by Topic</div><div class="wok-tag-cloud">' + WOK.allTags.slice(0, 16).map(function(t) { return '<span class="wok-tag-pill" data-tag="' + t + '">' + t + '</span>'; }).join('') + '</div>';
  tagCloud.querySelectorAll('.wok-tag-pill').forEach(function(pill) { pill.addEventListener('click', function() { if (window.WOKTag) window.WOKTag.open(pill.dataset.tag); }); });
  sidebar.appendChild(tagCloud);
  var popular = document.createElement('div');
  popular.className = 'wok-sidebar-widget';
  popular.innerHTML = '<div class="wok-sidebar-widget-title">&#128293; Popular Articles</div><ul class="wok-popular-list">' + WOK.articles.slice(0, 5).map(function(a, i) { return '<li><a class="wok-popular-item" href="' + a.url + '"><span class="wok-popular-num">0' + (i+1) + '</span><span class="wok-popular-title">' + a.title + '</span></a></li>'; }).join('') + '</ul>';
  sidebar.appendChild(popular);
}

// ===== HOMEPAGE SEARCH =====
function wireHomepageSearch() {
  var homeInput = document.querySelector('input[placeholder*="search" i]') || document.querySelector('input[placeholder*="Search" i]');
  if (!homeInput || homeInput.id === 'wok-main-input') return;
  homeInput.addEventListener('focus', function() { if (window.WOKSearch) { homeInput.blur(); window.WOKSearch.open(); } });
  homeInput.setAttribute('readonly', 'true');
  homeInput.style.cursor = 'pointer';
}

// ===== INIT =====
function init() {
  buildSearchOverlay();
  buildTagPage();
  addNavSearchButton();
  wireArticleTags();
  wireTooltips();
  buildRelatedArticles();
  buildSidebarWidgets();
  wireHomepageSearch();
  console.log('[WoK] Web of Knowledge initialized', { articles: WOK.articles.length, glossary: WOK.glossary.length, tags: WOK.allTags.length });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();