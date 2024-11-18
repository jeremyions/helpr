# Helpr - Your Community Marketplace for Help

Helpr is a user-centric marketplace connecting people who need assistance with skilled helpers across various services including cleaning, aged care, babysitting, and more. Our platform focuses on empowering Australians with disabilities to find, hire, and manage support workers while making the process seamless for both helpers and clients.

## 🚀 Features

- AI-powered search and matching
- Real-time messaging and notifications
- Secure payment processing
- Location-based service matching
- Helper profiles with reviews and ratings
- Booking system with calendar integration
- Multi-language support
- WCAG-compliant accessibility

## 🛠 Tech Stack

- **Frontend**: Next.js, React.js, ShadCN UI, TailwindCSS
- **Backend**: Node.js, PostgreSQL, Prisma ORM, Redis
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Messaging**: SendBird
- **Maps**: Google Maps API
- **AI**: OpenAI API
- **Monitoring**: Sentry
- **Analytics**: Google Analytics

## 🏗 Prerequisites

- Node.js 18+
- PostgreSQL
- Redis
- npm or yarn

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/helpr.git
   cd helpr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in the `.env` file.

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# See .env file for all required variables
```

## 🧪 Testing

```bash
npm run test
```

## 🚀 Deployment

The application can be deployed on Vercel or AWS:

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy!

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All our amazing contributors
- The open-source community
- Our early adopters and users

## 📞 Support

For support, email support@helpr.io or join our Slack community.
