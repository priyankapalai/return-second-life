import type { ObjectAnalysis, PathwayDetail, ReimaginedIdea, EnvironmentalFact } from './types';

const repair: PathwayDetail = {
  key: 'repair',
  label: 'REPAIR',
  tagline: 'Restore it. Keep it.',
  description: 'Restore it and continue using it.',
  whyItWorks:
    'The object appears structurally usable, so repairing visible wear may extend its life.',
  nextSteps: [
    { num: '01', text: 'Check structural condition' },
    { num: '02', text: 'Tighten loose fittings' },
    { num: '03', text: 'Repair damaged surfaces' },
    { num: '04', text: 'Clean and refinish if appropriate' },
  ],
  effort: 'Low',
  icon: 'RefreshCw',
};

const reuse: PathwayDetail = {
  key: 'reuse',
  label: 'REUSE',
  tagline: 'Transform its purpose.',
  description: 'Give it a new role in your home.',
  whyItWorks:
    'Many everyday objects can serve a completely different function with a little creativity.',
  nextSteps: [
    { num: '01', text: 'Clean and prepare the object' },
    { num: '02', text: 'Consider a new function or location' },
    { num: '03', text: 'Modify or decorate if helpful' },
    { num: '04', text: 'Put it to its new use' },
  ],
  effort: 'Low',
  icon: 'Sparkles',
};

const donate: PathwayDetail = {
  key: 'donate',
  label: 'DONATE',
  tagline: 'Pass it forward.',
  description: 'Let someone else make use of it.',
  whyItWorks:
    'If the object is still functional, it may benefit someone who needs it.',
  nextSteps: [
    { num: '01', text: 'Clean the item thoroughly' },
    { num: '02', text: 'Check it is safe and complete' },
    { num: '03', text: 'Find a local charity or community group' },
    { num: '04', text: 'Arrange drop-off or collection' },
  ],
  effort: 'Low',
  icon: 'Heart',
};

const recycle: PathwayDetail = {
  key: 'recycle',
  label: 'RECYCLE',
  tagline: 'Recover what can be used again.',
  description: 'Return its materials to the cycle.',
  whyItWorks:
    'Materials in many objects can be recovered and processed into something new.',
  nextSteps: [
    { num: '01', text: 'Identify the main materials' },
    { num: '02', text: 'Check local recycling guidelines' },
    { num: '03', text: 'Prepare the item as required' },
    { num: '04', text: 'Use the correct collection point' },
  ],
  effort: 'Medium',
  icon: 'Recycle',
};

const allPaths = { repair, reuse, donate, recycle };

// --- Reimagined Ideas ---

const jarIdeas: ReimaginedIdea[] = [
  {
    id: 'jar-planter',
    title: 'Mini Planter',
    description: 'Turn this unused jar into a simple indoor planter.',
    image: 'https://images.pexels.com/photos/13336360/pexels-photo-13336360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Glass jar', 'Small pebbles', 'Potting soil', 'Small plant or succulent'],
    tutorial: {
      intro: 'A clean glass jar makes an excellent small planter for succulents or herbs.',
      steps: [
        { num: '01', title: 'Clean the jar', text: 'Wash the jar thoroughly with soap and warm water to remove any residue.' },
        { num: '02', title: 'Add drainage layer', text: 'Place a layer of small pebbles at the bottom to help with drainage, since the jar has no hole.', materials: 'Small pebbles' },
        { num: '03', title: 'Add soil', text: 'Add a layer of potting soil on top of the pebbles.', materials: 'Potting soil' },
        { num: '04', title: 'Plant', text: 'Carefully place a small succulent or herb into the soil and press gently.', materials: 'Small plant' },
        { num: '05', title: 'Decorate', text: 'Optionally decorate the outside with twine, paint, or labels.' },
      ],
      safetyNote: 'Avoid overwatering plants in jars without drainage holes to prevent root rot.',
    },
  },
  {
    id: 'jar-candle',
    title: 'Candle Holder',
    description: 'Create a warm ambient candle holder from a glass jar.',
    image: 'https://images.pexels.com/photos/36929876/pexels-photo-36929876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Glass jar', 'Tea light or small candle', 'Sand or decorative stones'],
    tutorial: {
      intro: 'A glass jar can become a beautiful candle holder for cozy evenings.',
      steps: [
        { num: '01', title: 'Clean the jar', text: 'Remove any labels and wash the jar thoroughly.' },
        { num: '02', title: 'Add base layer', text: 'Pour a layer of sand or decorative stones at the bottom for stability.', materials: 'Sand or stones' },
        { num: '03', title: 'Place candle', text: 'Set a tea light or small candle into the jar.', materials: 'Tea light candle' },
        { num: '04', title: 'Optional decoration', text: 'Wrap twine or wire around the rim for a decorative touch.' },
      ],
      safetyNote: 'Never leave a burning candle unattended. Keep away from flammable materials and children.',
    },
  },
  {
    id: 'jar-lantern',
    title: 'DIY Lantern',
    description: 'Hang the jar as an outdoor lantern for warm garden lighting.',
    image: 'https://images.pexels.com/photos/11098764/pexels-photo-11098764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Medium',
    materials: ['Glass jar', 'Wire or twine', 'Tea light candle'],
    tutorial: {
      intro: 'Transform a jar into a hanging lantern for outdoor spaces.',
      steps: [
        { num: '01', title: 'Clean the jar', text: 'Wash and dry the jar completely.' },
        { num: '02', title: 'Create a handle', text: 'Wrap wire or sturdy twine around the rim and form a loop handle for hanging.', materials: 'Wire or twine' },
        { num: '03', title: 'Add light source', text: 'Place a tea light or LED candle inside.', materials: 'Tea light or LED candle' },
        { num: '04', title: 'Hang safely', text: 'Hang from a sturdy branch or hook, away from flammable surfaces.' },
      ],
      safetyNote: 'Use LED candles for safest outdoor use. If using real candles, ensure the jar is heat-resistant glass.',
    },
  },
  {
    id: 'jar-organizer',
    title: 'Desk Organizer',
    description: 'Use the jar to store pens, brushes, or small desk items.',
    image: 'https://images.pexels.com/photos/34263267/pexels-photo-34263267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Glass jar', 'Optional: paint or labels'],
    tutorial: {
      intro: 'A clean jar is a simple and elegant desk organizer.',
      steps: [
        { num: '01', title: 'Clean the jar', text: 'Remove labels and wash thoroughly.' },
        { num: '02', title: 'Dry completely', text: 'Ensure the inside is fully dry before use.' },
        { num: '03', title: 'Optional: decorate', text: 'Paint the outside or add labels for a personal touch.', materials: 'Paint or labels' },
        { num: '04', title: 'Fill and use', text: 'Place pens, brushes, or small items inside.' },
      ],
    },
  },
];

const chairIdeas: ReimaginedIdea[] = [
  {
    id: 'chair-plant-stand',
    title: 'Plant Stand',
    description: 'Use the chair as an elevated stand for potted plants.',
    image: 'https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old chair', 'Potted plants'],
    tutorial: {
      intro: 'An old chair can become a charming plant display in a garden or balcony.',
      steps: [
        { num: '01', title: 'Clean the chair', text: 'Remove dirt and loose debris from the chair.' },
        { num: '02', title: 'Check stability', text: 'Ensure the chair can support the weight of potted plants.' },
        { num: '03', title: 'Place plants', text: 'Arrange potted plants on the seat and backrest.', materials: 'Potted plants' },
        { num: '04', title: 'Position outdoors', text: 'Place in a garden, patio, or balcony corner.' },
      ],
      safetyNote: 'If the chair is structurally weak, reinforce joints before placing heavy pots on it.',
    },
  },
  {
    id: 'chair-side-table',
    title: 'Side Table',
    description: 'Convert the chair into a rustic side table for your living space.',
    image: 'https://images.pexels.com/photos/15480366/pexels-photo-15480366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Medium',
    materials: ['Old chair', 'Sandpaper', 'Wood paint or varnish'],
    tutorial: {
      intro: 'A chair can be repurposed into a side table with minor modifications.',
      steps: [
        { num: '01', title: 'Clean and sand', text: 'Sand the surface to remove old paint or rough spots.', materials: 'Sandpaper' },
        { num: '02', title: 'Remove backrest', text: 'If desired, carefully remove the backrest to create a flat table surface.' },
        { num: '03', title: 'Paint or seal', text: 'Apply paint or wood varnish to protect the surface.', materials: 'Wood paint or varnish' },
        { num: '04', title: 'Place as a table', text: 'Use beside a sofa or bed as a side table.' },
      ],
      safetyNote: 'Wear protective goggles when cutting or removing wooden parts. Use tools carefully.',
    },
  },
  {
    id: 'chair-garden-seating',
    title: 'Garden Seating',
    description: 'Restore the chair for outdoor garden seating.',
    image: 'https://images.pexels.com/photos/13041128/pexels-photo-13041128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old chair', 'Outdoor paint', 'Cushion (optional)'],
    tutorial: {
      intro: 'A worn chair can find new life as garden or patio seating.',
      steps: [
        { num: '01', title: 'Clean the chair', text: 'Remove dirt and flaking paint.' },
        { num: '02', title: 'Sand rough areas', text: 'Smooth any splinters or rough surfaces.', materials: 'Sandpaper' },
        { num: '03', title: 'Paint for outdoors', text: 'Apply weather-resistant outdoor paint.', materials: 'Outdoor paint' },
        { num: '04', title: 'Add a cushion', text: 'Optionally add a weather-resistant cushion for comfort.', materials: 'Outdoor cushion' },
      ],
    },
  },
  {
    id: 'chair-shelf',
    title: 'Decorative Shelf',
    description: 'Mount the chair on a wall as an unusual floating shelf.',
    image: 'https://images.pexels.com/photos/35266315/pexels-photo-35266315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Advanced',
    materials: ['Old chair', 'Wall mounting hardware', 'Drill'],
    tutorial: {
      intro: 'A chair can be mounted on a wall as a creative display shelf.',
      steps: [
        { num: '01', title: 'Prepare the chair', text: 'Clean and sand the chair surface.' },
        { num: '02', title: 'Remove legs', text: 'Carefully remove the front legs if a flatter profile is desired.' },
        { num: '03', title: 'Mount to wall', text: 'Use appropriate wall anchors and brackets to securely mount the chair.', materials: 'Wall mounting hardware' },
        { num: '04', title: 'Decorate', text: 'Place small plants, books, or decorative items on the seat.' },
      ],
      safetyNote: 'Wall mounting must be done with proper anchors for your wall type. If unsure, consult a professional. Improper mounting can cause injury.',
    },
  },
];

const shoesIdeas: ReimaginedIdea[] = [
  {
    id: 'shoes-planter',
    title: 'Garden Planter',
    description: 'Turn old shoes into quirky garden planters.',
    image: 'https://images.pexels.com/photos/36969134/pexels-photo-36969134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old shoes', 'Potting soil', 'Small plants or flowers'],
    tutorial: {
      intro: 'Old shoes can become charming and unusual garden planters.',
      steps: [
        { num: '01', title: 'Clean the shoes', text: 'Remove dirt and let them dry.' },
        { num: '02', title: 'Add drainage', text: 'Poke a few small holes in the soles for drainage if needed.' },
        { num: '03', title: 'Fill with soil', text: 'Fill the shoes with potting soil.', materials: 'Potting soil' },
        { num: '04', title: 'Plant', text: 'Add small flowers, succulents, or herbs.', materials: 'Small plants' },
      ],
    },
  },
  {
    id: 'shoes-decoration',
    title: 'Garden Decoration',
    description: 'Use shoes as decorative elements in a garden corner.',
    image: 'https://images.pexels.com/photos/36931536/pexels-photo-36931536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old shoes', 'Small rocks or pebbles'],
    tutorial: {
      intro: 'Shoes can be placed among plants as a whimsical garden feature.',
      steps: [
        { num: '01', title: 'Clean the shoes', text: 'Wash off loose dirt.' },
        { num: '02', title: 'Arrange in garden', text: 'Place among flower beds or along a path.' },
        { num: '03', title: 'Add details', text: 'Fill with pebbles or small decorative items.', materials: 'Pebbles' },
      ],
    },
  },
  {
    id: 'shoes-storage',
    title: 'Storage Organizer',
    description: 'Repurpose shoes as small storage containers for household items.',
    image: 'https://images.pexels.com/photos/33622447/pexels-photo-33622447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Medium',
    materials: ['Old shoes', 'Adhesive or mounting strips'],
    tutorial: {
      intro: 'Clean shoes can hold small items in a garage or entryway.',
      steps: [
        { num: '01', title: 'Clean thoroughly', text: 'Wash and fully dry the shoes.' },
        { num: '02', title: 'Mount or place', text: 'Use adhesive strips to mount on a wall or place on a shelf.', materials: 'Mounting strips' },
        { num: '03', title: 'Store items', text: 'Use to hold keys, small tools, or garden supplies.' },
      ],
    },
  },
  {
    id: 'shoes-donate',
    title: 'Donate for Reuse',
    description: 'If still wearable, donate shoes to someone who can use them.',
    image: 'https://images.pexels.com/photos/30122380/pexels-photo-30122380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old shoes', 'Cleaning supplies'],
    tutorial: {
      intro: 'If shoes are still wearable, donation is the most impactful option.',
      steps: [
        { num: '01', title: 'Clean the shoes', text: 'Wipe or wash the shoes and let them dry.', materials: 'Cleaning supplies' },
        { num: '02', title: 'Check condition', text: 'Ensure soles are intact and the shoes are wearable.' },
        { num: '03', title: 'Find a charity', text: 'Look for a local shelter, charity shop, or shoe donation program.' },
        { num: '04', title: 'Drop off', text: 'Deliver or mail the shoes to the chosen organization.' },
      ],
    },
  },
];

const phoneIdeas: ReimaginedIdea[] = [
  {
    id: 'phone-media',
    title: 'Secondary Media Device',
    description: 'Use the phone as a dedicated music or media player at home.',
    image: 'https://images.pexels.com/photos/39500870/pexels-photo-39500870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old phone', 'Wi-Fi connection', 'Charger'],
    tutorial: {
      intro: 'An old phone can serve as a dedicated media device when connected to Wi-Fi.',
      steps: [
        { num: '01', title: 'Back up data', text: 'Transfer any personal data off the phone before repurposing.' },
        { num: '02', title: 'Factory reset', text: 'Reset the phone to remove all personal data and accounts.' },
        { num: '03', title: 'Install media apps', text: 'Install streaming or music apps over Wi-Fi.', materials: 'Wi-Fi connection' },
        { num: '04', title: 'Set up at home', text: 'Place on a charger in a fixed location as a media station.', materials: 'Charger' },
      ],
      safetyNote: 'Always fully wipe personal data before repurposing any device. Do not modify the battery or internal components.',
    },
  },
  {
    id: 'phone-camera',
    title: 'Home Monitoring Camera',
    description: 'Where technically appropriate, use the phone as a home monitoring camera.',
    image: 'https://images.pexels.com/photos/12953565/pexels-photo-12953565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Medium',
    materials: ['Old phone', 'Phone mount or tripod', 'Monitoring app'],
    tutorial: {
      intro: 'Some phones can be repurposed as home monitoring cameras using dedicated apps.',
      steps: [
        { num: '01', title: 'Wipe data', text: 'Factory reset and remove all personal accounts.' },
        { num: '02', title: 'Install a monitoring app', text: 'Install a reputable home monitoring app from the official store.', materials: 'Monitoring app' },
        { num: '03', title: 'Mount the phone', text: 'Use a tripod or mount to position the camera.', materials: 'Phone mount' },
        { num: '04', title: 'Connect to power', text: 'Keep the phone plugged in for continuous use.', materials: 'Charger' },
      ],
      safetyNote: 'Only use apps from official stores. Do not modify the phone hardware or battery. Ensure compliance with local privacy laws when monitoring spaces.',
    },
  },
  {
    id: 'phone-donate',
    title: 'Donate Working Device',
    description: 'If the phone still works, donate it to someone in need.',
    image: 'https://images.pexels.com/photos/11120516/pexels-photo-11120516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old phone', 'Charger (if available)'],
    tutorial: {
      intro: 'A working phone can be valuable to someone who needs a device.',
      steps: [
        { num: '01', title: 'Back up and wipe', text: 'Transfer personal data off the phone, then perform a full factory reset.' },
        { num: '02', title: 'Remove accounts', text: 'Ensure all accounts and locks are removed from the device.' },
        { num: '03', title: 'Find a program', text: 'Look for a charity, shelter, or electronics donation program.' },
        { num: '04', title: 'Donate with charger', text: 'Include the charger if available.', materials: 'Charger' },
      ],
      safetyNote: 'Data security is critical. Verify all personal data is fully erased before donating any device.',
    },
  },
  {
    id: 'phone-ewaste',
    title: 'Certified E-Waste Recycling',
    description: 'If the phone no longer works, recycle it through a certified e-waste channel.',
    image: 'https://images.pexels.com/photos/28124639/pexels-photo-28124639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['Old phone'],
    tutorial: {
      intro: 'Non-working phones should be recycled through certified electronics recycling.',
      steps: [
        { num: '01', title: 'Wipe data', text: 'Attempt a factory reset if the phone powers on. Remove SIM and memory cards.' },
        { num: '02', title: 'Remove battery if applicable', text: 'If the phone has a removable battery, check local guidelines for separate battery disposal.' },
        { num: '03', title: 'Find a collection point', text: 'Locate a certified e-waste collection point or retailer take-back program.' },
        { num: '04', title: 'Drop off', text: 'Deliver the phone for proper recycling. Do not place in general waste.' },
      ],
      safetyNote: 'Never attempt to open, puncture, or modify phone batteries. Damaged lithium batteries can cause fire. Use certified e-waste channels only.',
    },
  },
];

export const demoObjects: ObjectAnalysis[] = [
  {
    id: 'chair',
    name: 'Old Chair',
    image:
      'https://images.pexels.com/photos/28388323/pexels-photo-28388323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    identifiedAs: 'Wooden Chair',
    condition: 'Appears reusable with minor wear.',
    materials: 'Wood, metal fittings, fabric',
    possibleCurrentUse: 'May still serve as seating with minor repairs.',
    confidence: 'High',
    availablePaths: ['repair', 'reuse', 'donate', 'recycle'],
    pathways: allPaths,
    reimaginedIdeas: chairIdeas,
  },
  {
    id: 'jar',
    name: 'Glass Jar',
    image:
      'https://images.pexels.com/photos/14029288/pexels-photo-14029288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    identifiedAs: 'Glass Jar',
    condition: 'Appears intact and cleanable.',
    materials: 'Glass, possibly a metal or plastic lid',
    possibleCurrentUse: 'Could be used for storage or food preservation.',
    confidence: 'High',
    availablePaths: ['reuse', 'donate', 'recycle'],
    pathways: allPaths,
    reimaginedIdeas: jarIdeas,
  },
  {
    id: 'shoes',
    name: 'Old Shoes',
    image:
      'https://images.pexels.com/photos/30122380/pexels-photo-30122380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    identifiedAs: 'Worn Shoes',
    condition: 'Appears worn but may still be wearable or donatable.',
    materials: 'Leather, rubber, textile, foam',
    possibleCurrentUse: 'May be wearable for light use or suitable for donation.',
    confidence: 'Moderate',
    availablePaths: ['reuse', 'donate', 'recycle'],
    pathways: allPaths,
    reimaginedIdeas: shoesIdeas,
  },
  {
    id: 'phone',
    name: 'Old Phone',
    image:
      'https://images.pexels.com/photos/36680544/pexels-photo-36680544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    identifiedAs: 'Smartphone',
    condition: 'Appears aged; functionality unknown from image alone.',
    materials: 'Glass, metal, plastic, battery, electronics',
    possibleCurrentUse: 'May work as a secondary media device if functional.',
    confidence: 'Moderate',
    safetyNote:
      'Before disposal, protect your personal data and use an appropriate electronics recycling or collection channel. Do not attempt risky repairs on batteries or internal components.',
    availablePaths: ['repair', 'reuse', 'donate', 'recycle'],
    pathways: {
      ...allPaths,
      recycle: {
        ...recycle,
        label: 'E-WASTE RECYCLE',
        tagline: 'Recover what can be used again.',
        nextSteps: [
          { num: '01', text: 'Back up and wipe personal data' },
          { num: '02', text: 'Remove SIM and memory cards' },
          { num: '03', text: 'Find a certified e-waste collection point' },
          { num: '04', text: 'Do not place in general waste' },
        ],
      },
    },
    reimaginedIdeas: phoneIdeas,
  },
];

// Generic fallback ideas for user-uploaded images (not from demos)
const genericIdeas: ReimaginedIdea[] = [
  {
    id: 'generic-reuse',
    title: 'Creative Reuse',
    description: 'Consider how this object could serve a different purpose in your home.',
    image: 'https://images.pexels.com/photos/13336360/pexels-photo-13336360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['The object itself', 'Cleaning supplies', 'Optional decorative materials'],
    tutorial: {
      intro: 'Many objects can be given a new function with creativity and minimal effort.',
      steps: [
        { num: '01', title: 'Clean the object', text: 'Thoroughly clean and dry the object.' },
        { num: '02', title: 'Assess properties', text: 'Consider what makes the object useful — its shape, size, or material.' },
        { num: '03', title: 'Brainstorm new uses', text: 'Think about where in your home something with these properties could help.' },
        { num: '04', title: 'Put it to use', text: 'Try it out in its new role and adjust as needed.' },
      ],
    },
  },
  {
    id: 'generic-repair',
    title: 'Repair and Keep',
    description: 'If the object has minor damage, repairing it may extend its useful life.',
    image: 'https://images.pexels.com/photos/15480366/pexels-photo-15480366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Medium',
    materials: ['The object itself', 'Appropriate repair tools', 'Cleaning supplies'],
    tutorial: {
      intro: 'Simple repairs can often extend the life of everyday objects.',
      steps: [
        { num: '01', title: 'Inspect the object', text: 'Identify what is damaged or worn.' },
        { num: '02', title: 'Research repair options', text: 'Look for repair guides specific to the material or object type.' },
        { num: '03', title: 'Gather tools', text: 'Collect the appropriate tools and materials for the repair.', materials: 'Repair tools' },
        { num: '04', title: 'Repair carefully', text: 'Follow safe repair practices. If unsure, consult a professional.' },
      ],
      safetyNote: 'Do not attempt repairs on electrical, chemical, or structural items without professional guidance.',
    },
  },
  {
    id: 'generic-donate',
    title: 'Donate to Others',
    description: 'If the object is still usable, someone else may benefit from it.',
    image: 'https://images.pexels.com/photos/30122380/pexels-photo-30122380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['The object itself', 'Cleaning supplies'],
    tutorial: {
      intro: 'Donation is a simple way to give an object a second life.',
      steps: [
        { num: '01', title: 'Clean the object', text: 'Make sure the item is clean and presentable.', materials: 'Cleaning supplies' },
        { num: '02', title: 'Check condition', text: 'Ensure the item is safe and usable.' },
        { num: '03', title: 'Find a charity', text: 'Look for a local charity shop, shelter, or community group.' },
        { num: '04', title: 'Donate', text: 'Drop off the item or arrange collection.' },
      ],
    },
  },
  {
    id: 'generic-recycle',
    title: 'Recycle Responsibly',
    description: 'If reuse is not possible, recycling may recover useful materials.',
    image: 'https://images.pexels.com/photos/28124639/pexels-photo-28124639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    difficulty: 'Easy',
    materials: ['The object itself'],
    tutorial: {
      intro: 'When an object cannot be reused, recycling is the next best option.',
      steps: [
        { num: '01', title: 'Identify materials', text: 'Determine what the object is made of.' },
        { num: '02', title: 'Check guidelines', text: 'Look up local recycling rules for these materials.' },
        { num: '03', title: 'Prepare the item', text: 'Clean or disassemble the item as required by your local facility.' },
        { num: '04', title: 'Recycle correctly', text: 'Take the item to the appropriate collection point.' },
      ],
      safetyNote: 'For electronics, batteries, or hazardous materials, always use specialized recycling channels.',
    },
  },
];

// Create a generic analysis for user-uploaded images that don't match a demo
export function createGenericAnalysis(image: string): ObjectAnalysis {
  return {
    id: 'custom',
    name: 'Your Object',
    image,
    identifiedAs: 'An everyday object',
    condition: 'Condition cannot be fully determined from an image alone.',
    materials: 'Possible materials may include common household materials.',
    possibleCurrentUse: 'Based on the image, this object may still have practical uses.',
    confidence: 'Low',
    availablePaths: ['reuse', 'donate', 'recycle'],
    pathways: allPaths,
    reimaginedIdeas: genericIdeas,
  };
}

export const environmentalFacts: EnvironmentalFact[] = [
  {
    icon: 'Recycle',
    title: 'Less Waste',
    text: 'Keeping an existing object useful can reduce the need to replace it with something new.',
  },
  {
    icon: 'Wrench',
    title: 'Longer Product Life',
    text: 'Repairing an item can extend its useful life and delay the need for a replacement.',
  },
  {
    icon: 'Leaf',
    title: 'Resource Conservation',
    text: 'When an item can no longer be reused or repaired, recycling may allow useful materials to be recovered.',
  },
  {
    icon: 'Sparkles',
    title: 'Creative Reuse',
    text: 'Giving an object a new purpose is a simple way to reduce waste and spark creativity.',
  },
];

export const sustainabilityMessages: string[] = [
  'Reuse gives an existing object another chance to be useful.',
  'Repair can extend the useful life of the things we already own.',
  'Recycling works best when we first consider whether something can be reduced, reused, or repaired.',
  'One object, repurposed, is one fewer object needlessly discarded.',
  'Small choices, repeated, can change what becomes waste.',
];
