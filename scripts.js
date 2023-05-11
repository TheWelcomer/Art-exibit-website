const tabs = document.querySelectorAll('.tab-navigation a');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    
    // Hide all tab content divs
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    
    // Show the selected tab content div
    const tabId = tab.getAttribute('href');
    const tabContent = document.querySelector(tabId);
    tabContent.style.display = 'block';
  });
});
