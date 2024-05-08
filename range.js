// Get the range inputs and their respective span elements
var stabilityInput = document.getElementById('audio_stability_id');
var stabilityValueSpan = document.getElementById('stabilityValue');

var boostInput = document.getElementById('audio_similarityBoost_id');
var boostValueSpan = document.getElementById('boostValue');

var styleInput = document.getElementById('audio_style_id');
var styleValueSpan = document.getElementById('styleValue');

// Update the span text when the range input value changes for Stability
stabilityInput.addEventListener('input', function() {
    stabilityValueSpan.textContent = stabilityInput.value;
});

// Update the span text when the range input value changes for Similarity Boost
boostInput.addEventListener('input', function() {
    boostValueSpan.textContent = boostInput.value;
});

// Update the span text when the range input value changes for Style
styleInput.addEventListener('input', function() {
    styleValueSpan.textContent = styleInput.value;
});