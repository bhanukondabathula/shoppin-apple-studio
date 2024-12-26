interface PriceConfig {
  selectedCase: string;
  selectedSize: string;
  selectedBand: string;
}

/**
 * Calculate the total price of the Apple Watch configuration.
 *
 * @param {PriceConfig} config - Configuration object containing selected options.
 * @returns {string} - Formatted price string.
 * 
 */

export const calculatePrice = ({
  selectedCase,
  selectedSize,
  selectedBand,
}: PriceConfig): string => {
  let price = 0;

  // Case pricing
  if (selectedCase === 'aluminum') {
    price += 399; // Base price for aluminum
  } else if (selectedCase === 'titanium') {
    price += 699; // Base price for titanium
  }

  // Size pricing
  if (selectedSize === '44mm') {
    price += 50; // Additional cost for larger size
  }

  // Band pricing
  if (selectedBand === 'solo-loop') {
    price += 49; // Price for Solo Loop
  } else if (selectedBand === 'braided-solo-loop') {
    price += 99; // Price for Braided Solo Loop
  }

  // Return the formatted price
  return `$${price}`;
};
