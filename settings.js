


document.addEventListener('DOMContentLoaded', function(){
  var select = document.getElementById('themeSelect');

  try {
    var saved = localStorage.getItem('theme') || '';
    select.value = saved;
  } catch(e) {}

  function applyTheme(value){
    if (!value) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', value);
    }
  }

  // apply on load
  applyTheme(select.value);

  // handle changes
  select.addEventListener('change', function(){
    var v = select.value;
    try { localStorage.setItem('theme', v); } catch(e) {}
    applyTheme(v);
  });
});