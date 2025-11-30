import { Article, Category } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Homeowner’s Guide to Hail Damage',
    excerpt: 'Hail can cause invisible damage that leads to leaks years later. Learn how to spot the signs early.',
    content: `
      <p class="mb-4">Hailstorms are one of the most common causes of roof damage, yet the damage isn't always obvious from the ground. While large hailstones can crack shingles or dent metal, smaller hail can strip the protective granules from asphalt shingles, exposing the underlying mat to UV degradation.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Signs of Hail Damage</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Granule Loss:</strong> Look for accumulation of granules in your gutters or downspouts.</li>
        <li><strong>Bruising:</strong> Dark spots on shingles where granules have been knocked off.</li>
        <li><strong>Mat Cracking:</strong> In severe cases, the shingle mat itself may be fractured.</li>
      </ul>

      <p class="mb-4">Most insurance policies cover hail damage, but there is often a statute of limitations for filing a claim. It is crucial to get a professional inspection immediately after a major storm.</p>
    `,
    author: 'Sarah Jenkins',
    date: 'Oct 12, 2023',
    category: Category.DAMAGE,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    readTime: 5
  },
  {
    id: '2',
    title: 'Navigating the Insurance Claim Process',
    excerpt: 'Don’t let the paperwork overwhelm you. We break down the 5 steps to a successful roof claim.',
    content: `
      <p class="mb-4">Filing an insurance claim for roof damage can feel like a full-time job. Understanding the process beforehand can save you time and stress.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Step 1: The Inspection</h3>
      <p class="mb-4">Before calling your insurance agent, have a reputable roofer inspect the damage. They can tell you if there is enough damage to warrant a claim, preventing a "zero-pay" claim on your record.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Step 2: Filing the Claim</h3>
      <p class="mb-4">Call your provider's claims department. Be prepared to provide the date of the storm and the type of damage suspected.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Step 3: The Adjuster Meeting</h3>
      <p class="mb-4">An insurance adjuster will visit your home. It is highly recommended to have your roofer present during this meeting to ensure all damage is documented.</p>
    `,
    author: 'Mike Ross',
    date: 'Nov 05, 2023',
    category: Category.INSURANCE,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    readTime: 8
  },
  {
    id: '3',
    title: 'Asphalt Shingles vs. Metal Roofing',
    excerpt: 'Comparing the two most popular residential roofing materials on cost, longevity, and durability.',
    content: `
      <p class="mb-4">Choosing a material for your roof replacement is a big decision. Asphalt shingles are the most common due to affordability, while metal roofs are gaining popularity for their longevity.</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-100 border-b">
              <th class="p-3">Feature</th>
              <th class="p-3">Asphalt Shingles</th>
              <th class="p-3">Metal Roofing</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3">Lifespan</td>
              <td class="p-3">15-30 Years</td>
              <td class="p-3">40-70 Years</td>
            </tr>
            <tr class="border-b">
              <td class="p-3">Cost</td>
              <td class="p-3">$ (Affordable)</td>
              <td class="p-3">$$$ (Premium)</td>
            </tr>
            <tr>
              <td class="p-3">Durability</td>
              <td class="p-3">Moderate</td>
              <td class="p-3">High (Wind/Fire Resistant)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    author: 'David Chen',
    date: 'Jan 15, 2024',
    category: Category.MATERIALS,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    readTime: 6
  },
  {
    id: '4',
    title: 'Understanding Your Deductible',
    excerpt: 'What is ACV vs RCV? How much will you actually pay out of pocket?',
    content: `
      <p class="mb-4">One of the most confusing parts of a roof claim is the deductible and the difference between Actual Cash Value (ACV) and Replacement Cost Value (RCV).</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">RCV (Replacement Cost Value)</h3>
      <p class="mb-4">This coverage pays what it costs to replace your roof at today's prices, minus your deductible. This is the preferred coverage type.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">ACV (Actual Cash Value)</h3>
      <p class="mb-4">This pays the replacement cost MINUS depreciation. If your roof is old, the payout might be significantly less than the cost of a new roof.</p>

      <p class="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800">
        <strong>Warning:</strong> Never trust a contractor who offers to "pay" or "waive" your deductible. This is considered insurance fraud in many jurisdictions.
      </p>
    `,
    author: 'Sarah Jenkins',
    date: 'Feb 02, 2024',
    category: Category.INSURANCE,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    readTime: 4
  },
  {
    id: '5',
    title: 'Spring Maintenance Checklist',
    excerpt: 'Get your roof ready for the rainy season with these simple inspection tips.',
    content: `
      <p class="mb-4">Spring cleaning shouldn't just be for the inside of your house. Your roof has likely taken a beating over the winter.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Clean gutters and downspouts to prevent water backup.</li>
        <li>Trim overhanging tree branches to prevent impact damage during storms.</li>
        <li>Check for loose or missing shingles.</li>
        <li>Inspect flashing around chimneys and vents for rust or separation.</li>
      </ul>
    `,
    author: 'Mike Ross',
    date: 'Mar 20, 2024',
    category: Category.MAINTENANCE,
    imageUrl: 'https://picsum.photos/800/600?random=5',
    readTime: 3
  },
   {
    id: '6',
    title: 'Why Ventilation Matters',
    excerpt: 'Poor attic ventilation can cook your shingles from the inside out. Here is why airflow is key.',
    content: `
      <p class="mb-4">Many homeowners focus on the shingles on top, but the airflow underneath is just as critical. Proper attic ventilation extends the life of your roof and reduces energy bills.</p>
      <p class="mb-4">Without proper intake (soffit vents) and exhaust (ridge or box vents), heat and moisture build up in the attic. In the summer, this superheated air bakes shingles, causing them to crack and curl prematurely. In winter, it leads to ice dams.</p>
    `,
    author: 'David Chen',
    date: 'Apr 10, 2024',
    category: Category.BASICS,
    imageUrl: 'https://picsum.photos/800/600?random=6',
    readTime: 4
  }
];