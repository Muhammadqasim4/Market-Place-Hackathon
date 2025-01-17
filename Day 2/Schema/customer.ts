export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'customerId', type: 'number', title: 'Customer ID' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
      { name: 'customerName', type: 'string', title: 'Customer Name' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
      { name: 'customerEmail', type: 'string', title: 'Customer Email' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
      { name: 'phoneNumber', type: 'number', title: 'Phone Number' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
      { name: 'City/Country', type: 'string', title: 'City/Country' ,validation: (Rule) =>
         Rule.required().error('This field is required.')},
      { name: 'address', type: 'string', title: 'Address' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
    ],
  };