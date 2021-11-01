// const { AuthenticationError } = require('apollo-server-express');
// const { Gratitude, Intention, Mood, Outside, Picture, Sleep, User, Water, Social } = require('../models');
// const { signToken } = require('../utils/auth');


// const resolvers = {
//   Query: {
//     // user : async () => {
//     //   return User.find();
//     // },

//     // userone : async ( parent, { _id }) => {
//     //   return User.findOne({ id });
//     // },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return User.findOne({ _id: context.user._id }).populate("picture");
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },

//   },

//   Mutation: {
//     // addUser: async (parent, { name, email, password }) => {
//     //   const user = await User.create({ name, email, password });
//     //   const token = signToken(user);
//     //   return { token, user };
//     // },

//     // login: async (parent, { email, password }) => {
//     //   const user = await User.findOne({ email });

//     //   if (!user) {
//     //     throw new AuthenticationError('No user found with this email address');
//     //   }

//     //   const correctPw = await user.isCorrectPassword(password);

//     //   if (!correctPw) {
//     //     throw new AuthenticationError('Incorrect credentials');
//     //   }

//     //   const token = signToken(user);

//     //   return { token, user };
//     // },

 
//     addPicture: async (parent, { pictureUploaded }, context) => {
//       console.log("adding pic")
//       if (context.user) {
//         console.log("logged in pic")
//         const picture = await Picture.create({
//           pictureUploaded,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { picture: picture._id } },
//           {
//             new: true,
//           }
//         );

//         return picture;
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },

   
//   },
// };

// module.exports = resolvers;


