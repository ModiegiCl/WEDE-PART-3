document.addEventListener('DOMContentLoaded',()=>{
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    })
  })
  // Accordion for FAQs
  document.querySelectorAll('.accordion-header').forEach(h=>{
    h.addEventListener('click',()=>{
      const body=h.nextElementSibling;
      body.classList.toggle('open');
      h.querySelector('span').textContent=body.classList.contains('open')?'−':'+';
    })
  })
  // Modal
  document.querySelectorAll('[data-modal]').forEach(b=>{
    b.addEventListener('click',()=>document.getElementById(b.dataset.modal).classList.add('open'))
  })
  document.querySelectorAll('.close-modal').forEach(c=>{
    c.addEventListener('click',()=>c.closest('.modal').classList.remove('open'))
  })
  // Lightbox
  const lightbox=document.getElementById('lightbox'), lbImg=document.getElementById('lightbox-img');
  document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click',()=>{
      lbImg.src=img.src;
      lightbox.classList.add('open');
    })
  })
  if(lightbox) lightbox.addEventListener('click',()=>lightbox.classList.remove('open'))
  // Dynamic services + search
  const services=[
    {title:'Youth Development',desc:'After-school tutoring 10-18 years',category:'education'},
    {title:'Food Parcel Programme',desc:'Weekly food support',category:'welfare'},
    {title:'Skills Training',desc:'Computer & sewing classes',category:'education'},
    {title:'Elderly Care',desc:'Day care & wellness',category:'welfare'}
  ];
  const cont=document.getElementById('dynamic-services');
  if(cont){
    const render=list=>cont.innerHTML=list.map(s=>`<div class="card"><h3>${s.title}</h3><p>${s.desc}</p></div>`).join('');
    render(services);
    document.getElementById('serviceSearch')?.addEventListener('input',e=>{
      const q=e.target.value.toLowerCase();
      render(services.filter(s=>s.title.toLowerCase().includes(q)))
    })
  }
  // Map - Mbombela
  if(document.getElementById('map')){
    const map=L.map('map').setView([-25.4753,30.9694],13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OSM'}).addTo(map);
    L.marker([-25.4753,30.9694]).addTo(map).bindPopup('Hope Haven - Mbombela').openPopup();
  }
  // Enquiry form validation
  document.getElementById('enquiryForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    document.getElementById('enquiryResult').innerHTML='<div class="card" style="background:#d4edda"><h3>Enquiry Received - Cost: R0 for volunteers, R250/month sponsor, Free services Mon-Fri</h3></div>';
  })
  // Contact form validation
  document.getElementById('contactForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    document.getElementById('contactResult').innerHTML='<div class="card" style="background:#d4edda"><p>Email ready for info@hopehaven.org.za</p></div>';
  })
})