# MPIRSG Website - Important Information

## 🔐 Login Credentials

### Student Login
- **URL**: `/student-login`
- **Demo Student ID**: `demo`
- **Demo Password**: `demo123`

### Admin Login
- **URL**: `/admin-login`
- **Demo Email**: `admin@mpirsg.org`
- **Demo Password**: `admin123`

> ⚠️ **Note**: These are demo credentials for testing purposes only. Replace with actual authentication system before production deployment.

---

## 📝 Data Update Guide

All dummy data has been replaced with placeholder messages. Update the following files with actual data:

### 1. Site Statistics (`src/data/siteData.ts`)

```typescript
export const stats = [
  { key: "stat_total", value: 0 },      // Update with total members
  { key: "stat_running", value: 0 },    // Update with active members
  { key: "stat_former", value: 0 },     // Update with alumni count
  { key: "stat_events", value: 0 },     // Update with events completed
];
```

### 2. Leaders Information (`src/data/siteData.ts`)

```typescript
export const leaders = [
  { 
    name_bn: "নাম বাংলায়", 
    name_en: "Name in English", 
    role_bn: "পদবী বাংলায়", 
    role_en: "Role in English" 
  },
  // Add more leaders...
];
```

### 3. Notices (`src/data/siteData.ts`)

```typescript
export const notices = [
  {
    date: "2026-05-20",
    title_bn: "নোটিশ শিরোনাম",
    title_en: "Notice Title",
    body_bn: "নোটিশের বিস্তারিত বাংলায়",
    body_en: "Notice details in English",
  },
  // Add more notices...
];
```

### 4. Award Winners (`src/data/siteData.ts`)

```typescript
// PRS Award Winners
export const prsAwardees = [
  {
    name_bn: "নাম বাংলায়",
    name_en: "Name in English",
    year: "2025",
    image: "/path/to/image.jpg",
  },
  // Add more awardees...
];

// Social Development Award Winners
export const socialAwardees = [
  {
    name_bn: "নাম বাংলায়",
    name_en: "Name in English",
    year: "2025",
    image: "/path/to/image.jpg",
  },
  // Add more awardees...
];
```

### 5. Contact Information (`src/sections/Contact/Contact.tsx`)

Update line 18-20:
```typescript
{ icon: Phone, label: t("contact_phone"), value: "+880 1XXX-XXXXXX" },
{ icon: Mail, label: t("contact_email_label"), value: "info@mpirsg.org" },
```

---

## 🖼️ Image Management

### Activity Images
- Location: `/public/images/`
- Format: `rover01.jpg` to `rover50.jpg`
- Categories:
  - Camping: rover01-13
  - Social Work: rover14-26
  - Training: rover27-38
  - Events: rover39-50

### Leader/Award Images
- Add images to `/src/assets/` or `/public/images/`
- Update image paths in `siteData.ts`

---

## 🔧 Authentication Setup (For Production)

### Backend Integration Required:

1. **Student Login** (`src/pages/StudentLogin.tsx`)
   - Replace demo check (line 18-35) with actual API call
   - Example:
   ```typescript
   const response = await fetch('/api/auth/student/login', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

2. **Admin Login** (`src/pages/AdminLogin.tsx`)
   - Replace demo check (line 18-35) with actual API call
   - Implement JWT token storage
   - Add protected routes

### Security Checklist:
- [ ] Remove demo credentials
- [ ] Implement proper password hashing
- [ ] Add CSRF protection
- [ ] Implement rate limiting
- [ ] Add session management
- [ ] Set up secure cookies
- [ ] Implement logout functionality
- [ ] Add password reset feature

---

## 📱 Testing

### Local Testing:
```bash
npm run dev
```

### Test Login:
1. Navigate to `/student-login` or `/admin-login`
2. Use demo credentials provided above
3. Check toast notifications for success/error messages

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Update all placeholder data
- [ ] Add real images
- [ ] Replace demo login with actual authentication
- [ ] Update contact information
- [ ] Test all forms
- [ ] Verify responsive design
- [ ] Check accessibility
- [ ] Run performance audit
- [ ] Set up analytics
- [ ] Configure error tracking

---

## 📞 Support

For any questions or issues, contact the development team.

**Last Updated**: May 20, 2026
