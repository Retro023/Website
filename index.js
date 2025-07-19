// Tree navigation control functions

document.addEventListener('DOMContentLoaded', () => {

  // Expand all subtrees
  function expandAllSubtrees() {
    const subtrees = document.querySelectorAll('.subtree');
    const toggleButtons = document.querySelectorAll('button.toggle-button');

    subtrees.forEach(subtree => {
      subtree.style.display = 'block';
    });

    toggleButtons.forEach(button => {
      button.textContent = '-';
      button.setAttribute('aria-expanded', 'true');
    });

    console.log('Expanded all subtrees');
  }

  // Collapse all subtrees
  function collapseAllSubtrees() {
    const subtrees = document.querySelectorAll('.subtree');
    const toggleButtons = document.querySelectorAll('button.toggle-button');

    subtrees.forEach(subtree => {
      subtree.style.display = 'none';
    });

    toggleButtons.forEach(button => {
      button.textContent = '+';
      button.setAttribute('aria-expanded', 'false');
    });

    console.log('Collapsed all subtrees');
  }

  // Toggle individual subtree on button click
  function toggleSubTree(buttonElement) {
    const parentLi = buttonElement.closest('li');
    if (!parentLi) {
      console.warn('Toggle button is not inside a list item:', buttonElement);
      return;
    }

    const subtree = parentLi.querySelector('.subtree');
    if (!subtree) {
      console.warn('No subtree found for button:', buttonElement);
      return;
    }

    const isCurrentlyVisible = subtree.style.display !== 'none';

    if (isCurrentlyVisible) {
      subtree.style.display = 'none';
      buttonElement.textContent = '+';
      buttonElement.setAttribute('aria-expanded', 'false');
    } else {
      subtree.style.display = 'block';
      buttonElement.textContent = '-';
      buttonElement.setAttribute('aria-expanded', 'true');
    }
  }

  // Initialize tree state - collapsed by default
  function initializeTreeState(startExpanded = false) {
    if (startExpanded) {
      expandAllSubtrees();
    } else {
      collapseAllSubtrees();
    }
  }

  // Set up event delegation for toggle buttons
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('button.toggle-button')) {
      toggleSubTree(event.target);
    }
  });

  // Keyboard shortcuts: Ctrl+E to expand all, Ctrl+C to collapse all
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'e' || e.key === 'E')) {
      e.preventDefault();
      expandAllSubtrees();
    }
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
      collapseAllSubtrees();
    }
  });

  // Initialize on page load
  initializeTreeState(false);
});
