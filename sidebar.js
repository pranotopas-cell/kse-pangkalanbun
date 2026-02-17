

const menu = document.getElementById('menu-dashboard');

const newMenus = [
  { name: 'Home 🏠', link: 'index.html' },
  { name: 'Profile 👤', link: 'profile.html' },
  { name: 'Pengiriman ⛽', link: 'pengiriman.html' },
  { name: 'Invoice 💰', link: 'invoice.html' },
  { name: 'Laporan 📊', submenu: [
      { name: 'Harian', link: 'laporan-harian.html' },
      { name: 'Bulanan', link: 'laporan-bulanan.html' }
    ]
  },
  { name: 'Settings ⚙️', link: 'settings.html' }
];

newMenus.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item.name;

  if(item.link) li.onclick = () => window.location.href = item.link;

  if(item.submenu){
    const subUl = document.createElement('ul');
    subUl.classList.add('submenu');
    item.submenu.forEach(subItem => {
      const subLi = document.createElement('li');
      subLi.textContent = subItem.name;
      subLi.onclick = (e) => {
        e.stopPropagation();
        window.location.href = subItem.link;
      }
      subUl.appendChild(subLi);
    });
    li.appendChild(subUl);

    li.onclick = (e) => {
      e.stopPropagation();
      subUl.style.display = subUl.style.display === 'block' ? 'none' : 'block';
    }
  }

  menu.appendChild(li);
});

