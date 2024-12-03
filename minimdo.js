// Assuming tooltip is a variable representing the tooltip element

// Check if the value is null, undefined, or an empty string
if (value === null || value === undefined || value === '') {
  // Hide the tooltip
  tooltip.style.display = 'none';
} else {
  // Show the tooltip
  tooltip.style.display = 'block';
}
