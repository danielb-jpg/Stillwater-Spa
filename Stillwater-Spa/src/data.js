// Swap in the spa's real WhatsApp number (country code, no + or spaces)
export const WHATSAPP = '2348000000000'

// [name, description, duration, price, moods, art style index]
export const treatments = [
['Swedish massage','Long, flowing strokes to melt tension.','60 min','₦32,000',['Relax'],0],
['Aromatherapy massage','Warm essential oils and slow pressure.','90 min','₦38,000',['Relax'],1],
['Hot stone massage','Heated basalt stones for deep, steady calm.','90 min','₦75,000',['Relax','Restore'],2],
['Head & scalp massage','Release for the neck, jaw and scalp.','30 min','₦20,000',['Relax'],3],
['Prenatal massage','Gentle, supportive care for mums-to-be.','60 min','From ₦40,000',['Relax'],1],
['Four hands massage','Two therapists, one perfectly synced massage.','45 min','₦80,000',['Relax'],2],
['Couples massage','Side by side in a private suite.','60 min','₦68,000',['Relax'],0],
['Deep tissue massage','Firm work on knots and stubborn tension.','60 min','₦45,000',['Restore'],2],
['Sports massage','Recovery for tight, tired muscles.','45 min','₦38,000',['Restore'],3],
['Foot reflexology','Pressure-point work for tired feet and legs.','30 min','₦20,000',['Restore'],0],
['Clean-up facial','Deep cleanse, steam and a calming mask.','60 min','₦30,000',['Glow'],1],
['Vitamin C & collagen facial','Brightening infusion for a fresh finish.','30 min','₦25,000',['Glow'],3],
['Back facial','Cleanse and exfoliate the skin you can’t see.','45 min','₦20,000',['Glow'],0],
['Radiant glow scrub','Gold-flecked polish for smooth, shining skin.','45 min','₦70,000',['Glow'],2],
['Spa pedicure','Milk and honey soak, scrub, massage and paraffin.','2 hrs','₦24,500',['Glow'],1],
['Moroccan hammam','Black soap, kessa scrub and a deep rinse.','60 min','₦70,000',['Reset','Glow'],3],
['Body scrub & wrap','Exfoliate, then wrap to soften and detox.','90 min','₦60,000',['Reset','Glow'],2],
['Body scrub','Full-body exfoliation for a smooth, even glow.','60 min','₦40,000',['Reset'],0],
['Steam bath','Herbal steam to open pores and clear the head.','30 min','₦20,000',['Reset'],1],
['Sauna','Dry heat to loosen muscles and sweat it out.','45 min','₦10,500',['Reset'],3]]

export const packages = ['The Rejuvenation spa day (₦47,000)','The Restorative spa day (₦93,000)','The Full Retreat spa day (₦172,000)']

export const moodBlurbs = {Relax:'Slow, soft and unhurried.',Restore:'Deep work for a tired body.',Glow:'Skin that looks as good as you feel.',Reset:'Heat, steam and a proper detox.'}
export const moods = Object.keys(moodBlurbs)

// [gradient, colour a, colour b, colour c]
export const art = [['#C9D3C0,#7E9A80','#4F6B52','#6E8A70','#A9B79F'],['#EBD9C2,#C69470','#8E5A3B','#B9805B','#E8DCC6'],['#2F4533,#16201A','#A9B79F','#7E9A80','#EFEADF'],['#E8DCC6,#A9B79F','#4F6B52','#6E8A70','#B9805B']]

export const rituals = [
  { time: '1h 25 min', name: 'The Rejuvenation', price: 'From ₦47,000', items: ['Steam bath to open up', '45-minute massage', 'Express glow facial'], bg: '#C9D3C0,#7E9A80', a: '#4F6B52', b: '#6E8A70', c: '#A9B79F', sym: 'pb' },
  { time: '2h 20 min', name: 'The Restorative', price: 'From ₦93,000', items: ['Steam and sauna', 'Moroccan hammam scrub', '60-minute massage', 'Hydrating facial'], bg: '#EBD9C2,#C69470', a: '#8E5A3B', b: '#B9805B', c: '#E8DCC6', sym: 'wv' },
  { time: '3h 25 min', name: 'The Full Retreat', price: 'From ₦172,000', items: ['Steam, sauna and hammam', '90-minute hot stone massage', 'Signature facial', 'Spa pedicure', 'Herbal tea in the lounge'], bg: '#2F4533,#16201A', a: '#A9B79F', b: '#7E9A80', c: '#EFEADF', sym: 'pb' },
]

export const sanctuary = [
  { name: 'Steam room', bg: '#4F6B52,#1B241C', a: '#A9B79F', sym: 'wv' },
  { name: 'Sauna', bg: '#B9805B,#6B4429', a: '#E8DCC6', sym: 'wv' },
  { name: 'Quiet lounge', bg: '#E8DCC6,#A9B79F', a: '#4F6B52', b: '#6E8A70', c: '#B9805B', sym: 'pb', dark: true },
  { name: 'Couples suite', bg: '#6E8A70,#2F4533', a: '#EFEADF', b: '#A9B79F', c: '#E8DCC6', sym: 'pb' },
  { name: 'Herbal tea bar', bg: '#C69470,#8E5A3B', a: '#E8DCC6', sym: 'wv' },
  { name: 'Garden terrace', bg: '#A9B79F,#4F6B52', a: '#1B241C', b: '#2F4533', c: '#E8DCC6', sym: 'pb' },
]

export const memberships = [
  { name: 'Calm', price: '₦65,000', items: ['1 massage (60 min)', '1 steam session', '10% off extras'] },
  { name: 'Restore', price: '₦120,000', featured: true, items: ['2 massages (60 min)', '1 signature facial', 'Unlimited steam', '15% off extras'] },
  { name: 'Retreat', price: '₦200,000', items: ['Weekly massage', 'Hammam scrub monthly', 'Unlimited steam & sauna', 'Priority booking'] },
]
