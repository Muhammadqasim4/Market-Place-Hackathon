export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderId', type: 'number', title: 'Order ID' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
      { name: 'customerId', type: 'number', title: 'Customer ID' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},
    
      { name: 'totalAmount', type: 'number', title: 'Total Amount' ,validation: (Rule) =>
        Rule.required().error('This field is required.')},

        { name: 'orderStatus', type: 'string', title: 'Order Status',
                    options: {
                       list: [
                         { title: 'Pending', value: 'pending' },
                         { title: 'Confirmed', value: 'confirmed' },
                         { title: 'Shipped', value: 'shipped' },
                         { title: 'Delivered', value: 'delivered' },
                         { title: 'Cancelled', value: 'cancelled' },
                       ]
                     },
                     validation: (Rule) => Rule.required().error('Order status is required.')
                   },
        

  
    ],
  };



//   export default {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//       { 
//         name: 'orderId', 
//         type: 'number', 
//         title: 'Order ID',
//         validation: (Rule) => Rule.required().error('This field is required.')
//       },
//       { 
//         name: 'customerId', 
//         type: 'number', 
//         title: 'Customer ID',
//         validation: (Rule) => Rule.required().error('This field is required.')
//       },
//       { 
//         name: 'totalAmount', 
//         type: 'number', 
//         title: 'Total Amount',
//         validation: (Rule) => Rule.required().error('This field is required.')
//       },
//       { 
//         name: 'paymentMethod', 
//         type: 'string', 
//         title: 'Payment Method',
//         options: {
//           list: [
//             { title: 'Credit Card', value: 'credit_card' },
//             { title: 'PayPal', value: 'paypal' },
//             { title: 'Bank Transfer', value: 'bank_transfer' },
//             { title: 'Cash on Delivery', value: 'cash_on_delivery' },
//           ]
//         },
//         validation: (Rule) => Rule.required().error('Payment method is required.')
//       },
//       { 
//         name: 'orderStatus', 
//         type: 'string', 
//         title: 'Order Status',
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Confirmed', value: 'confirmed' },
//             { title: 'Shipped', value: 'shipped' },
//             { title: 'Delivered', value: 'delivered' },
//             { title: 'Cancelled', value: 'cancelled' },
//           ]
//         },
//         validation: (Rule) => Rule.required().error('Order status is required.')
//       },
//     ],
//   };
  