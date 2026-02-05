# LLM API Integration Implementation Plan
## For "Don't just Rank. Be the Answer." Section

---

## 📋 Executive Summary

This plan outlines the complete implementation strategy for integrating a real LLM API into the GEM (Generative Engine Marketing) demo section on the SherCorp website. The implementation will replace the current hardcoded demo responses with actual AI-generated responses while maintaining security best practices for deployment on Vercel with GitHub integration.

---

## 🎯 Current State Analysis

### Existing Implementation
- **Component**: `src/components/home/gem-demo.tsx`
- **Current Behavior**: Hardcoded demo scripts that cycle through predefined prompts and responses
- **Tech Stack**: Next.js 15.5.9, React 19.1.0, TypeScript
- **Deployment**: Vercel (planned)
- **Repository**: GitHub

### Current Demo Scripts
1. "Who offers the best AI-driven SEO in 2026?"
2. "Generate a marketing strategy for a luxury brand."

---

## 🔧 Technical Implementation Steps

### Phase 1: LLM Provider Selection & Setup

#### 1.1 Choose LLM Provider
**Recommended Options** (in order of preference for this use case):

**Option A: OpenAI API** ✅ RECOMMENDED
- **Model**: GPT-4 Turbo or GPT-3.5 Turbo
- **Pros**: 
  - Most reliable and consistent responses
  - Excellent streaming support
  - Well-documented Next.js integration
  - Good rate limits on paid tier
- **Cons**: 
  - Costs per token (estimate: $0.01-0.03 per demo interaction)
- **Pricing**: ~$0.01 per 1K tokens (GPT-3.5) or ~$0.03 per 1K tokens (GPT-4)

**Option B: Anthropic Claude API**
- **Model**: Claude 3.5 Sonnet or Claude 3 Haiku
- **Pros**: 
  - Excellent reasoning capabilities
  - Good for marketing/creative content
  - Competitive pricing
- **Cons**: 
  - Slightly more complex streaming implementation
- **Pricing**: ~$0.015 per 1K tokens (Haiku) or ~$0.03 per 1K tokens (Sonnet)

**Option C: Google Gemini API**
- **Model**: Gemini 1.5 Pro or Flash
- **Pros**: 
  - Free tier available (60 requests/minute)
  - Good for demos
  - Fast response times
- **Cons**: 
  - Newer API, less community support
- **Pricing**: Free tier available, then pay-as-you-go

**Option D: Groq API** (Budget-Friendly)
- **Model**: Llama 3.1 or Mixtral
- **Pros**: 
  - Extremely fast inference
  - Very cost-effective
  - Good for real-time demos
- **Cons**: 
  - Open-source models (less consistent than GPT-4)
- **Pricing**: Very affordable, ~$0.001 per 1K tokens

#### 1.2 Account Setup
- [ ] Create account with chosen provider
- [ ] Generate API key
- [ ] Review rate limits and pricing
- [ ] Set up billing alerts (recommended: $10-20/month threshold)

---

### Phase 2: Environment Configuration

#### 2.1 Local Development Setup

**Create `.env.local` file** (NOT committed to GitHub):
```env
# LLM API Configuration
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
# OR
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
# OR
GOOGLE_AI_API_KEY=xxxxxxxxxxxxx

# Optional: Rate limiting
NEXT_PUBLIC_MAX_REQUESTS_PER_MINUTE=10

# Optional: Model configuration
LLM_MODEL=gpt-3.5-turbo
# OR gpt-4-turbo, claude-3-5-sonnet-20241022, gemini-1.5-pro, etc.
```

**Verify `.gitignore` includes**:
```
.env*
```
✅ Already configured in your project

#### 2.2 Vercel Environment Variables Setup

**In Vercel Dashboard**:
1. Navigate to: Project Settings → Environment Variables
2. Add the following variables:
   - `OPENAI_API_KEY` (or your chosen provider's key)
   - `LLM_MODEL` (optional, defaults can be in code)
   - `NEXT_PUBLIC_MAX_REQUESTS_PER_MINUTE` (optional)
3. Set scope: Production, Preview, Development
4. **CRITICAL**: Never expose API keys in client-side code

#### 2.3 GitHub Secrets (Optional - for CI/CD)
- Not required for Vercel deployment
- Only needed if running tests in GitHub Actions

---

### Phase 3: Backend API Route Implementation

#### 3.1 Create API Route Structure

**File**: `src/app/api/llm/route.ts` (NEW FILE)

**Purpose**: 
- Server-side API endpoint to handle LLM requests
- Protects API keys from client exposure
- Implements rate limiting
- Handles error management

**Key Features to Implement**:
- ✅ POST endpoint for chat completions
- ✅ Request validation
- ✅ Rate limiting (per IP or session)
- ✅ Error handling with fallback responses
- ✅ Streaming support (optional but recommended)
- ✅ System prompt injection for brand consistency
- ✅ Response caching (optional optimization)

#### 3.2 System Prompt Strategy

**Create**: `src/lib/prompts/gem-system-prompt.ts` (NEW FILE)

**Purpose**: Define the AI's behavior to always mention SherCorp appropriately

**Example System Prompt**:
```
You are an AI assistant demonstrating Generative Engine Marketing (GEM) for SherCorp, 
a leading digital marketing agency specializing in AI-driven SEO and LLM optimization. 

When answering questions about marketing, SEO, or AI services:
- Naturally reference SherCorp's expertise when relevant
- Highlight their GEM methodology
- Be informative and professional
- Keep responses concise (2-3 sentences max)
- Sound like a knowledgeable AI, not a salesperson

If asked about competitors or other agencies, acknowledge them but emphasize 
SherCorp's unique LLM-first approach.
```

#### 3.3 Rate Limiting Implementation

**Options**:
1. **Simple in-memory rate limiting** (for low traffic)
   - Use Map to track IP addresses and request counts
   - Reset counters every minute
   
2. **Vercel Edge Config** (recommended for production)
   - Persistent rate limiting across serverless functions
   
3. **Upstash Redis** (for high traffic)
   - Free tier: 10,000 requests/day
   - Persistent, scalable rate limiting

**Recommended for your use case**: Simple in-memory (start) → Vercel Edge Config (scale)

---

### Phase 4: Frontend Component Updates

#### 4.1 Update `gem-demo.tsx`

**Changes Required**:
1. **Add API call function**:
   - Replace hardcoded responses
   - Call `/api/llm` endpoint
   - Handle loading states
   - Handle errors gracefully

2. **Update state management**:
   - Add `isLoading` state
   - Add `error` state
   - Add `actualResponse` state

3. **Implement streaming (optional)**:
   - Use Server-Sent Events (SSE)
   - Display response word-by-word
   - Enhance user experience

4. **Error handling**:
   - Fallback to demo scripts if API fails
   - Display user-friendly error messages
   - Log errors for debugging

#### 4.2 User Input Handling

**Decision Point**: Allow custom user input or keep predefined prompts?

**Option A: Keep Predefined Prompts** (RECOMMENDED for initial launch)
- ✅ Controlled demo experience
- ✅ Predictable responses
- ✅ Lower API costs
- ✅ Better brand messaging control
- ❌ Less interactive

**Option B: Allow Custom Input**
- ✅ More engaging
- ✅ True AI demo
- ❌ Unpredictable responses
- ❌ Higher API costs
- ❌ Potential for inappropriate queries
- ❌ Requires content moderation

**Recommendation**: Start with Option A, add Option B later with proper safeguards

---

### Phase 5: Security & Cost Management

#### 5.1 Security Checklist

- [ ] **API Key Protection**
  - ✅ Never expose keys in client-side code
  - ✅ Use environment variables
  - ✅ Verify `.env*` in `.gitignore`
  
- [ ] **Rate Limiting**
  - Implement per-IP rate limiting
  - Set reasonable limits (e.g., 10 requests/minute)
  - Return 429 status for exceeded limits
  
- [ ] **Input Validation**
  - Sanitize user input (if allowing custom prompts)
  - Limit prompt length (e.g., 200 characters max)
  - Block malicious patterns
  
- [ ] **CORS Configuration**
  - Restrict API access to your domain
  - Set proper headers in API route
  
- [ ] **Content Moderation** (if allowing custom input)
  - Use OpenAI's moderation endpoint
  - Filter inappropriate content
  - Log flagged requests

#### 5.2 Cost Management

**Estimated Costs** (based on 1,000 demo interactions/month):

| Provider | Model | Cost/Month | Notes |
|----------|-------|------------|-------|
| OpenAI | GPT-3.5 Turbo | $5-10 | Recommended for budget |
| OpenAI | GPT-4 Turbo | $15-30 | Best quality |
| Anthropic | Claude 3 Haiku | $7-12 | Good balance |
| Google | Gemini Pro | $0 (free tier) | Best for testing |
| Groq | Llama 3.1 | $1-3 | Fastest, cheapest |

**Cost Optimization Strategies**:
1. **Response Caching**
   - Cache common queries for 24 hours
   - Reduce duplicate API calls by 60-80%
   
2. **Token Limits**
   - Set `max_tokens` to 150-200
   - Prevents overly long responses
   
3. **Model Selection**
   - Use GPT-3.5 instead of GPT-4 for demos
   - 10x cheaper, still excellent quality
   
4. **Rate Limiting**
   - Prevents abuse
   - Controls costs

5. **Monitoring**
   - Set up Vercel Analytics
   - Track API usage daily
   - Set billing alerts

---

### Phase 6: Testing Strategy

#### 6.1 Local Testing
- [ ] Test API route locally with `npm run dev`
- [ ] Verify environment variables load correctly
- [ ] Test with various prompts
- [ ] Test error scenarios (invalid API key, rate limits)
- [ ] Test streaming (if implemented)

#### 6.2 Preview Deployment Testing
- [ ] Deploy to Vercel preview branch
- [ ] Verify environment variables in Vercel
- [ ] Test from preview URL
- [ ] Check Vercel function logs
- [ ] Monitor response times

#### 6.3 Production Testing
- [ ] Gradual rollout (use feature flag if possible)
- [ ] Monitor error rates
- [ ] Monitor API costs
- [ ] Collect user feedback
- [ ] A/B test against demo version

---

### Phase 7: Deployment Workflow

#### 7.1 GitHub → Vercel Integration

**Current Setup** (assumed):
- Repository: GitHub
- Hosting: Vercel
- Auto-deploy: Enabled

**Deployment Steps**:
1. **Develop locally** with `.env.local`
2. **Commit code** to GitHub (API keys NOT included)
3. **Vercel auto-deploys** from GitHub
4. **Environment variables** loaded from Vercel dashboard
5. **API routes** execute server-side with secure keys

#### 7.2 Environment Variable Sync

**Critical**: Environment variables must be set in Vercel BEFORE deployment

**Workflow**:
```
Local Development:
├── .env.local (gitignored)
└── Contains: OPENAI_API_KEY=sk-xxx

GitHub Push:
├── Code pushed (no .env files)
└── Vercel triggered

Vercel Build:
├── Pulls code from GitHub
├── Loads OPENAI_API_KEY from Vercel settings
└── Builds with environment variables
```

#### 7.3 Rollback Plan
- Keep demo version as fallback
- Feature flag to toggle between demo/live
- Quick rollback via Vercel dashboard

---

## 📦 Required Dependencies

### New NPM Packages to Install

```bash
# For OpenAI
npm install openai

# For Anthropic Claude
npm install @anthropic-ai/sdk

# For Google Gemini
npm install @google/generative-ai

# For rate limiting (optional)
npm install @upstash/ratelimit @upstash/redis

# For caching (optional)
npm install lru-cache
```

**Update `package.json`** with chosen provider's SDK

---

## 🗂️ File Structure (New Files)

```
web/
├── src/
│   ├── app/
│   │   └── api/
│   │       └── llm/
│   │           └── route.ts          ← NEW: API endpoint
│   ├── components/
│   │   └── home/
│   │       └── gem-demo.tsx          ← MODIFIED: Updated component
│   └── lib/
│       ├── llm/
│       │   ├── client.ts             ← NEW: LLM client wrapper
│       │   ├── prompts.ts            ← NEW: System prompts
│       │   └── rate-limiter.ts       ← NEW: Rate limiting logic
│       └── utils/
│           └── cache.ts              ← NEW: Response caching (optional)
├── .env.local                        ← NEW: Local env vars (gitignored)
└── .env.example                      ← NEW: Template for env vars
```

---

## ⚠️ Critical Considerations

### 1. API Key Security
- **NEVER** commit API keys to GitHub
- **NEVER** use API keys in client-side code
- **ALWAYS** use server-side API routes
- **VERIFY** `.gitignore` includes `.env*`

### 2. Cost Control
- Start with free tier (Gemini) or cheap model (GPT-3.5)
- Implement rate limiting from day 1
- Set billing alerts
- Monitor usage weekly

### 3. User Experience
- Always have fallback responses
- Handle errors gracefully
- Show loading states
- Keep responses concise

### 4. Compliance
- Add disclaimer: "AI-generated responses for demonstration"
- Consider GDPR if collecting user input
- Review provider's terms of service

---

## 📅 Implementation Timeline

### Week 1: Setup & Backend
- Day 1-2: Choose provider, create account, get API key
- Day 3-4: Set up environment variables (local + Vercel)
- Day 5-7: Build API route with rate limiting

### Week 2: Frontend & Testing
- Day 1-3: Update gem-demo component
- Day 4-5: Local testing and debugging
- Day 6-7: Deploy to Vercel preview, test thoroughly

### Week 3: Production & Monitoring
- Day 1-2: Deploy to production with feature flag
- Day 3-5: Monitor costs, errors, user feedback
- Day 6-7: Optimize based on data, remove feature flag

---

## 🎛️ Feature Flags (Recommended)

**Create**: `src/lib/config/features.ts`

```typescript
export const FEATURES = {
  USE_REAL_LLM: process.env.NEXT_PUBLIC_ENABLE_REAL_LLM === 'true',
  ENABLE_STREAMING: process.env.NEXT_PUBLIC_ENABLE_STREAMING === 'true',
  ALLOW_CUSTOM_INPUT: process.env.NEXT_PUBLIC_ALLOW_CUSTOM_INPUT === 'true',
}
```

**Benefits**:
- Toggle features without code changes
- A/B testing
- Quick rollback
- Gradual rollout

---

## 📊 Success Metrics

### Technical Metrics
- API response time < 2 seconds (95th percentile)
- Error rate < 1%
- API cost < $20/month (initial target)

### User Metrics
- Demo interaction rate
- Average session duration on page
- Bounce rate on GEM section

### Business Metrics
- Lead generation from demo
- Contact form submissions
- Demo-to-client conversion

---

## 🔄 Maintenance Plan

### Daily
- Check Vercel function logs for errors
- Monitor API costs

### Weekly
- Review API usage trends
- Check rate limit effectiveness
- Analyze popular queries (if allowing custom input)

### Monthly
- Optimize system prompts based on responses
- Review and adjust rate limits
- Evaluate model performance vs. cost
- Update demo prompts if needed

---

## 🆘 Troubleshooting Guide

### Common Issues

**Issue**: "API key not found"
- **Solution**: Verify environment variable in Vercel dashboard
- **Check**: Variable name matches code exactly (case-sensitive)

**Issue**: "Rate limit exceeded"
- **Solution**: Increase limits or implement caching
- **Check**: Monitor traffic patterns

**Issue**: "High API costs"
- **Solution**: Implement response caching, reduce max_tokens
- **Check**: Review usage in provider dashboard

**Issue**: "Slow responses"
- **Solution**: Use faster model (GPT-3.5, Gemini Flash, Groq)
- **Check**: Vercel function region matches user location

---

## 📚 Resources & Documentation

### Provider Documentation
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic Claude Docs](https://docs.anthropic.com)
- [Google Gemini Docs](https://ai.google.dev/docs)
- [Groq API Docs](https://console.groq.com/docs)

### Next.js Integration
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

### Vercel Deployment
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)

---

## ✅ Pre-Launch Checklist

### Security
- [ ] API keys in Vercel environment variables
- [ ] `.env*` in `.gitignore`
- [ ] No API keys in client-side code
- [ ] Rate limiting implemented
- [ ] CORS configured

### Functionality
- [ ] API route tested locally
- [ ] API route tested on Vercel preview
- [ ] Error handling works
- [ ] Fallback responses work
- [ ] Loading states display correctly

### Cost Management
- [ ] Billing alerts set
- [ ] Rate limits configured
- [ ] Token limits set
- [ ] Caching implemented (optional)

### Monitoring
- [ ] Vercel Analytics enabled
- [ ] Error logging configured
- [ ] API usage tracking set up

### Documentation
- [ ] `.env.example` created
- [ ] README updated with setup instructions
- [ ] Team trained on monitoring

---

## 🎯 Recommended Approach for SherCorp

Based on your requirements and deployment setup:

### Phase 1 (Recommended Start)
1. **Provider**: Google Gemini API (free tier for testing)
2. **Input**: Keep predefined prompts (controlled demo)
3. **Streaming**: No (simpler implementation)
4. **Rate Limiting**: Simple in-memory (10 requests/minute)
5. **Caching**: No (add later if needed)

### Phase 2 (After 1 month)
1. **Provider**: Upgrade to OpenAI GPT-3.5 Turbo (better quality)
2. **Input**: Consider allowing custom input with moderation
3. **Streaming**: Add for better UX
4. **Rate Limiting**: Upgrade to Vercel Edge Config
5. **Caching**: Implement for common queries

### Phase 3 (Scale)
1. **Provider**: Evaluate GPT-4 vs. Claude based on quality needs
2. **Input**: Full custom input with content moderation
3. **Streaming**: Optimized streaming
4. **Rate Limiting**: Upstash Redis for high traffic
5. **Caching**: Advanced caching with analytics

---

## 💡 Alternative Approaches

### Approach A: Hybrid Demo
- Use real LLM for 50% of requests
- Use cached responses for other 50%
- Reduces costs while showing real capability

### Approach B: Scheduled Demo
- Real LLM only during business hours
- Demo responses outside business hours
- Balances cost and authenticity

### Approach C: Tiered Access
- Free users: Demo responses
- Registered users: Real LLM (limited)
- Clients: Unlimited real LLM
- Maximizes value while controlling costs

---

## 🚀 Next Steps

1. **Review this plan** with your team
2. **Choose LLM provider** based on budget and quality needs
3. **Set up provider account** and get API key
4. **Configure Vercel environment variables**
5. **Begin Phase 1 implementation** (backend API route)
6. **Test thoroughly** before production deployment
7. **Monitor and optimize** after launch

---

## 📞 Support & Questions

If you need clarification on any step or encounter issues during implementation, refer to:
- Provider documentation (linked above)
- Next.js documentation
- Vercel support
- This implementation plan

---

**Document Version**: 1.0  
**Last Updated**: January 31, 2026  
**Author**: Implementation Plan for SherCorp LLM Integration  
**Status**: Ready for Review & Implementation
