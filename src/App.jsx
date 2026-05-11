import { useState, useEffect } from 'react';
import { initialProducts, categories } from './data';
import { Search, Menu, X, ShoppingBag, Settings, Plus, Eye, EyeOff, XCircle, ShoppingCart, Globe, Phone, Mail, MapPin, LayoutDashboard, Tags, Package, LogOut, Trash2 } from 'lucide-react';

const t = {
  ar: {
    storeName: 'فريز دراي',
    home: 'الرئيسية',
    products: 'الكتالوج',
    about: 'من نحن',
    heroTitle: 'أناقة لا تضاهى',
    heroDesc: 'اكتشف مجموعتنا الحصرية المصممة لتلبية أرقى الأذواق. تسوق الآن وتمتع بتجربة فريدة.',
    categoriesTitle: 'الفئات',
    searchPlaceholder: 'بحث عن منتج...',
    showingProducts: '{count} منتج',
    viewDetails: 'عرض سريع',
    hideProduct: 'إخفاء المنتج',
    showProduct: 'إظهار المنتج',
    noProductsTitle: 'لا توجد نتائج',
    noProductsDesc: 'لم نتمكن من العثور على ما تبحث عنه. جرب مصطلح بحث مختلف.',
    aboutStore: 'مرحباً بكم في فريز دراي، وجهتكم الأولى لأجود أنواع الحلويات والوجبات الخفيفة المجففة بالتجميد. نحن نفخر بتقديم تجربة طعم فريدة تجمع بين الجودة العالية والابتكار، حيث نستخدم أحدث التقنيات لضمان الحفاظ على النكهة والقيمة الغذائية.',
    aboutTitle: 'قصتنا ورؤيتنا',
    aboutMission: 'مهمتنا هي إضفاء البهجة على يومكم من خلال منتجاتنا المتميزة التي تلبي تطلعات عشاق التميز. نحن نؤمن بأن الجودة لا تساوم، ولهذا نختار مكوناتنا بعناية فائقة.',
    quickLinks: 'روابط سريعة',
    terms: 'الشروط والأحكام',
    privacy: 'سياسة الخصوصية',
    faq: 'الأسئلة الشائعة',
    contactUsTitle: 'تواصل معنا',
    support: 'الدعم الفني',
    phone: 'الهاتف',
    address: 'العنوان',
    addressValue: 'الرياض، المملكة العربية السعودية',
    copyright: 'جميع الحقوق محفوظة © {year} فريز دراي.',
    descTitle: 'الوصف',
    specsTitle: 'المواصفات',
    statusTitle: 'حالة المنتج',
    statusValue: 'جديد',
    availabilityTitle: 'التوفر',
    availabilityValue: 'متوفر',
    addToCart: 'إضافة للطلب',
    adminPanel: 'لوحة التحكم',
    addNewProduct: 'إضافة منتج جديد',
    productName: 'اسم المنتج',
    productCategory: 'الفئة',
    productPrice: 'السعر',
    productImage: 'رابط الصورة',
    productImageHelp: 'يُفضل استخدام روابط صور عالية الجودة.',
    productDesc: 'الوصف',
    saveProduct: 'حفظ المنتج',
    adminDashboard: 'لوحة تحكم الإدارة',
    manageProducts: 'إدارة المنتجات',
    manageCategories: 'إدارة الفئات',
    addCategory: 'إضافة فئة',
    logout: 'تسجيل الخروج',
    categoryNameAr: 'اسم الفئة (عربي)',
    categoryNameEn: 'اسم الفئة (إنجليزي)',
    saveCategory: 'حفظ الفئة',
    delete: 'حذف',
    makeOrder: 'اطلب من هنا',
    orderPage: 'صفحة الطلب',
    fullName: 'الاسم الكامل',
    city: 'المدينة',
    detailedAddress: 'العنوان بالتفصيل',
    phoneNumber: 'رقم الهاتف',
    submitOrder: 'إرسال الطلب',
    quantity: 'الكمية',
    showPrices: 'إظهار الأسعار للجميع',
    hidePrices: 'إخفاء الأسعار',
    orderSummary: 'ملخص الطلب',
    total: 'الإجمالي',
    exportPDF: 'تصدير PDF',
    exportImage: 'تصدير صورة',
  },
  en: {
    storeName: 'Freeze Dry',
    home: 'Home',
    products: 'Catalog',
    about: 'About Us',
    heroTitle: 'Timeless Elegance',
    heroDesc: 'Discover our exclusive collection designed to meet the highest tastes. Shop now for a unique experience.',
    categoriesTitle: 'Categories',
    searchPlaceholder: 'Search products...',
    showingProducts: '{count} items',
    viewDetails: 'Quick View',
    hideProduct: 'Hide Product',
    showProduct: 'Show Product',
    noProductsTitle: 'No Results',
    noProductsDesc: 'We couldn\'t find what you\'re looking for. Try a different search term.',
    aboutStore: 'Welcome to Freeze Dry, your premier destination for the finest freeze-dried sweets and snacks. We pride ourselves on offering a unique taste experience that combines high quality and innovation, using the latest technologies to ensure flavor and nutritional value are preserved.',
    aboutTitle: 'Our Story & Vision',
    aboutMission: 'Our mission is to brighten your day through our distinguished products that meet the expectations of those seeking excellence. We believe that quality is non-negotiable, which is why we select our ingredients with utmost care.',
    quickLinks: 'Quick Links',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    faq: 'FAQ',
    contactUsTitle: 'Get in Touch',
    support: 'Support',
    phone: 'Phone',
    address: 'Address',
    addressValue: 'Riyadh, Saudi Arabia',
    copyright: 'All rights reserved © {year} Freeze Dry.',
    descTitle: 'Details',
    specsTitle: 'Specifications',
    statusTitle: 'Condition',
    statusValue: 'New',
    availabilityTitle: 'Availability',
    availabilityValue: 'In Stock',
    addToCart: 'Add to Order',
    adminPanel: 'Admin Panel',
    addNewProduct: 'Add New Product',
    productName: 'Product Name',
    productCategory: 'Category',
    productPrice: 'Price',
    productImage: 'Image URL',
    productImageHelp: 'High quality images are recommended.',
    productDesc: 'Description',
    saveProduct: 'Save Product',
    adminDashboard: 'Admin Dashboard',
    manageProducts: 'Manage Products',
    manageCategories: 'Manage Categories',
    addCategory: 'Add Category',
    logout: 'Logout',
    categoryNameAr: 'Category Name (AR)',
    categoryNameEn: 'Category Name (EN)',
    saveCategory: 'Save Category',
    delete: 'Delete',
    makeOrder: 'Make Your Order Here',
    orderPage: 'Order Page',
    fullName: 'Full Name',
    city: 'City',
    detailedAddress: 'Detailed Address',
    phoneNumber: 'Phone Number',
    submitOrder: 'Submit Order',
    quantity: 'Quantity',
    showPrices: 'Show Prices Publicly',
    hidePrices: 'Hide Prices',
    orderSummary: 'Order Summary',
    total: 'Total',
    exportPDF: 'Export PDF',
    exportImage: 'Export Image',
  }
};

const getName = (p, lang) => p.name[lang] || p.name;
const getCat = (p, lang) => p.category[lang] || p.category;
const getPrice = (p, lang) => p.price[lang] || p.price;
const getDesc = (p, lang) => p.description[lang] || p.description;

const ProductCard = ({ product, lang, showPricesPublicly, showControls, activePage, cart, updateCart, setZoomImage, setIsZoomOpen }) => (
  <div 
    className={`group cursor-pointer ${!product.visible ? 'opacity-50 grayscale' : ''} animate-slide-up bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
    onClick={() => {
      if (!showControls) {
        setZoomImage(product.images[0]);
        setIsZoomOpen(true);
      }
    }}
  >
    <div className="relative aspect-square overflow-hidden bg-sand mb-4">
      <img 
        src={product.images[0]} 
        alt={getName(product, lang)} 
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
      />
      {!showControls && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <Eye className="text-white" size={32} />
        </div>
      )}
    </div>
    <div className="text-center">
      <h3 className="font-cairo text-base text-navy leading-tight mb-2 font-bold">{getName(product, lang)}</h3>
      {(showPricesPublicly || showControls || activePage === 'admin') && (
        <div className="text-gold font-bold font-cairo text-sm mb-3">
          {getPrice(product, lang)}
        </div>
      )}
      
      {showControls && (
        <div className="flex items-center justify-center gap-4 mt-4" onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={() => updateCart(product.id, -1)}
            className="w-8 h-8 flex items-center justify-center bg-sand text-navy rounded-full hover:bg-gray-200"
          >
            <XCircle size={16} />
          </button>
          <span className="font-bold font-cairo w-8 text-center">{cart[product.id] || 0}</span>
          <button 
            onClick={() => updateCart(product.id, 1)}
            className="w-8 h-8 flex items-center justify-center bg-navy text-white rounded-full hover:bg-navy/80"
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  </div>
);

const CatalogView = ({ lang, texts, searchQuery, setSearchQuery, appCategories, products, showPricesPublicly, activePage, cart, updateCart, setZoomImage, setIsZoomOpen }) => {
  // Helper to normalize Arabic characters for better search matching
  const normalizeArabic = (text) => {
    if (!text) return "";
    return text
      .replace(/[إأآا]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/[ًٌٍَُِّْ]/g, ""); // Remove harakat
  };

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const normalizedQuery = normalizeArabic(trimmedQuery);
  
  const categoriesWithProducts = appCategories[lang].filter(c => c.id !== 'all').map(category => {
    const categoryProducts = products.filter(p => {
      const isInCategory = (p.category[lang] === category.name || p.category === category.name);
      if (!isInCategory || !p.visible) return false;

      const nameAr = normalizeArabic(getName(p, 'ar').toLowerCase());
      const nameEn = getName(p, 'en').toLowerCase();
      const descAr = normalizeArabic(getDesc(p, 'ar').toLowerCase());
      const descEn = getDesc(p, 'en').toLowerCase();

      return (
        nameAr.includes(normalizedQuery) || 
        nameEn.includes(trimmedQuery) || 
        descAr.includes(normalizedQuery) || 
        descEn.includes(trimmedQuery)
      );
    });
    return { ...category, filteredProducts: categoryProducts };
  }).filter(c => c.filteredProducts.length > 0);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* SEARCH BAR */}
      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-md group">
          <input 
            type="text" 
            placeholder={texts.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full bg-white border border-gray-200 rounded-full ${lang === 'ar' ? 'pr-12 pl-12' : 'pl-12 pr-12'} py-3 focus:border-navy outline-none transition-all text-sm font-cairo shadow-sm`}
          />
          <Search className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-3 text-gray-400 group-focus-within:text-navy transition-colors`} size={20} />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className={`absolute ${lang === 'ar' ? 'left-4' : 'right-4'} top-3 text-gray-400 hover:text-navy transition-colors`}
            >
              <XCircle size={20} />
            </button>
          )}
        </div>
      </div>

      {/* RESULTS */}
      {categoriesWithProducts.length > 0 ? (
        categoriesWithProducts.map((category) => (
          <section key={category.id} className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-cairo text-navy mb-6 font-bold border-r-4 border-gold pr-4">{category.name}</h2>
              <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8 shadow-lg">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  lang={lang} 
                  showPricesPublicly={showPricesPublicly} 
                  showControls={false} 
                  activePage={activePage} 
                  setZoomImage={setZoomImage} 
                  setIsZoomOpen={setIsZoomOpen} 
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <div className="text-center py-24 animate-fade-in">
          <div className="bg-sand w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <Search size={40} />
          </div>
          <h3 className="text-2xl font-cairo text-navy font-bold mb-2">{texts.noProductsTitle}</h3>
          <p className="text-gray-500 font-cairo">{texts.noProductsDesc}</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-8 text-navy font-bold font-cairo border-b-2 border-navy pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            {lang === 'ar' ? 'إظهار كل المنتجات' : 'Show all products'}
          </button>
        </div>
      )}
    </div>
  );
};

const OrderPage = ({ lang, texts, appCategories, products, cart, updateCart, navigateTo, setCart }) => (
  <div className="max-w-screen-xl mx-auto px-4 py-16 animate-fade-in">
    <h1 className="text-4xl font-cairo text-navy text-center mb-12 font-bold">{texts.orderPage}</h1>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-12">
        {appCategories[lang].filter(c => c.id !== 'all').map((category) => {
          const catProducts = products.filter(p => p.category[lang] === category.name || p.category === category.name);
          return (
            <div key={category.id}>
              <h3 className="text-xl font-cairo font-bold text-navy mb-6 bg-sand p-3 rounded-lg">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {catProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    lang={lang} 
                    showControls={true} 
                    cart={cart} 
                    updateCart={updateCart} 
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white p-8 border border-gray-200 shadow-xl rounded-2xl sticky top-32">
          <h2 className="text-2xl font-cairo font-bold text-navy mb-8 border-b pb-4">{texts.orderSummary}</h2>
          
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            alert(lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Order submitted successfully!');
            setCart({});
            navigateTo('home');
          }}>
            <div>
              <label className="block text-xs uppercase tracking-widest font-cairo text-gray-500 mb-2">{texts.fullName}</label>
              <input required type="text" className="w-full p-3 bg-warmwhite border-b border-gray-300 focus:border-navy outline-none font-cairo" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-cairo text-gray-500 mb-2">{texts.city}</label>
              <input required type="text" className="w-full p-3 bg-warmwhite border-b border-gray-300 focus:border-navy outline-none font-cairo" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-cairo text-gray-500 mb-2">{texts.phoneNumber}</label>
              <input required type="tel" className="w-full p-3 bg-warmwhite border-b border-gray-300 focus:border-navy outline-none font-cairo text-left" dir="ltr" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-cairo text-gray-500 mb-2">{texts.detailedAddress}</label>
              <textarea required rows="3" className="w-full p-3 bg-warmwhite border border-gray-200 rounded-lg focus:border-navy outline-none font-cairo resize-none"></textarea>
            </div>

            <div className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="font-cairo text-gray-500">{texts.total}</span>
                <span className="font-cairo text-2xl font-bold text-navy">
                  {Object.values(cart).reduce((a, b) => a + b, 0)} {lang === 'ar' ? 'قطع' : 'items'}
                </span>
              </div>
              <button type="submit" className="w-full py-4 bg-navy text-white font-cairo font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3">
                <ShoppingBag size={20} />
                {texts.submitOrder}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = ({ texts, lang }) => (
  <div className="max-w-screen-md mx-auto px-6 py-24 animate-fade-in">
    <div className="text-center mb-16">
      <img src="/images/logo.png" alt="Logo" className="h-32 w-auto mx-auto mb-8" />
      <h1 className="text-5xl font-cairo text-navy font-bold mb-6">{texts.about}</h1>
      <div className="w-20 h-1 bg-gold mx-auto"></div>
    </div>
    
    <div className="space-y-16">
      <section className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-3xl font-cairo text-navy font-bold mb-6 border-r-4 border-gold pr-4">{texts.aboutTitle}</h2>
        <p className="text-xl text-gray-600 font-cairo leading-relaxed">
          {texts.aboutStore}
        </p>
      </section>

      <section className="bg-navy text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-cairo font-bold mb-6 border-r-4 border-gold pr-4">{lang === 'ar' ? 'مهمتنا' : 'Our Mission'}</h2>
          <p className="text-xl font-cairo leading-relaxed opacity-90">
            {texts.aboutMission}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-sand p-8 rounded-2xl">
            <h3 className="font-cairo font-bold text-navy text-xl mb-4">{lang === 'ar' ? 'الجودة أولاً' : 'Quality First'}</h3>
            <p className="text-gray-600 font-cairo">{lang === 'ar' ? 'نحن نلتزم بأعلى معايير الجودة في كل حبة ننتجها.' : 'We commit to the highest quality standards in every piece we produce.'}</p>
         </div>
         <div className="bg-sand p-8 rounded-2xl">
            <h3 className="font-cairo font-bold text-navy text-xl mb-4">{lang === 'ar' ? 'ابتكار مستمر' : 'Continuous Innovation'}</h3>
            <p className="text-gray-600 font-cairo">{lang === 'ar' ? 'نبحث دائماً عن طرق جديدة ومبتكرة لتقديم نكهات مذهلة.' : 'We always look for new and innovative ways to deliver amazing flavors.'}</p>
         </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activePage, setActivePage] = useState('home');
  const [products, setProducts] = useState(initialProducts);
  const [appCategories, setAppCategories] = useState(categories);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [showPricesPublicly, setShowPricesPublicly] = useState(false);
  const [cart, setCart] = useState({});
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);

  const [adminTab, setAdminTab] = useState('products');
  const [isAdminAuthOpen, setIsAdminAuthOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');
  const texts = t[lang];

  const handleAdminClick = () => {
    if (isAdminAuthenticated) {
      setActivePage('admin');
    } else {
      setIsAdminAuthOpen(true);
    }
  };

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateCart = (productId, delta) => {
    setCart(prev => {
      const newQty = (prev[productId] || 0) + delta;
      if (newQty <= 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newQty };
    });
  };

  const NavItem = ({ page, label }) => (
    <button 
      onClick={() => navigateTo(page)}
      className={`text-sm uppercase tracking-widest font-cairo transition-all duration-300 ${
        activePage === page 
          ? 'text-navy border-b border-navy pb-1' 
          : 'text-gray-500 hover:text-navy'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavItem = ({ page, label }) => (
    <button 
      onClick={() => navigateTo(page)}
      className={`block w-full text-${lang === 'ar' ? 'right' : 'left'} font-cairo uppercase tracking-widest py-3 transition-all ${
        activePage === page ? 'text-navy font-bold border-l-2 border-navy pl-4' : 'text-gray-500 hover:text-navy px-4'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className={`min-h-screen flex flex-col bg-warmwhite text-navy selection:bg-gold selection:text-white relative ${lang === 'ar' ? 'font-naskh text-right' : 'font-cairo text-left'}`}>
      
      {/* HEADER */}
      {activePage !== 'admin' && (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 transition-all duration-300 border-b border-gray-100 shadow-sm">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-between items-center h-24">
              
              <div className="flex-1 flex justify-start">
                 <button className="md:hidden text-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                   {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                 </button>
                 <div className={`hidden md:flex items-center gap-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                   <NavItem page="home" label={texts.home} />
                   <NavItem page="products" label={texts.products} />
                   <NavItem page="about" label={texts.about} />
                 </div>
              </div>

              <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => navigateTo('home')}>
                <img src="/images/logo.png" alt={texts.storeName} className="h-14 w-auto object-contain" />
                <span className="font-cairo font-bold text-2xl tracking-widest text-navy uppercase hidden lg:block">{texts.storeName}</span>
              </div>

              <div className="flex-1 flex justify-end items-center gap-6">
                <button onClick={handleAdminClick} className="text-navy hover:text-gold transition-colors" title={texts.adminPanel}>
                  <Settings size={20} />
                </button>
                <button onClick={toggleLanguage} className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-cairo font-semibold text-sm uppercase tracking-widest">
                  <Globe size={18} />
                  <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
                </button>
                <button onClick={() => navigateTo('order')} className="bg-navy text-white px-6 py-2 rounded-full font-cairo font-bold text-sm flex items-center gap-2 hover:bg-navy/90 shadow-md">
                  <ShoppingCart size={18} />
                  <span className="hidden sm:inline">{texts.orderPage}</span>
                  <span className="bg-gold text-navy w-5 h-5 rounded-full flex items-center justify-center text-[10px]">{Object.values(cart).reduce((a, b) => a + b, 0)}</span>
                </button>
              </div>
              
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white absolute top-24 left-0 w-full h-auto z-50 px-4 py-8 flex flex-col gap-4 shadow-xl border-b border-gray-100">
              <MobileNavItem page="home" label={texts.home} />
              <MobileNavItem page="products" label={texts.products} />
              <MobileNavItem page="about" label={texts.about} />
            </div>
          )}
        </header>
      )}

      {/* ADMIN PORTAL */}
      {activePage === 'admin' && (
        <div className={`flex-1 w-full bg-warmwhite flex flex-col md:flex-row ${lang === 'ar' ? 'font-naskh text-right' : 'font-cairo text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          {/* Sidebar */}
          <div className="w-full md:w-72 bg-white border-r border-gray-200 flex flex-col z-10 md:min-h-screen">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-cairo font-bold text-xl uppercase tracking-widest flex items-center gap-3"><LayoutDashboard size={20} className="text-navy" /> {texts.adminDashboard}</h2>
            </div>
            <div className="p-6 flex-1 space-y-2">
              <button onClick={() => setAdminTab('products')} className={`w-full text-${lang === 'ar' ? 'right' : 'left'} px-5 py-3 rounded-md font-cairo font-semibold text-sm flex items-center gap-4 transition-colors ${adminTab === 'products' ? 'bg-navy text-white' : 'hover:bg-sand text-gray-600'}`}>
                <Package size={18} /> {texts.manageProducts}
              </button>
              <button onClick={() => setAdminTab('settings')} className={`w-full text-${lang === 'ar' ? 'right' : 'left'} px-5 py-3 rounded-md font-cairo font-semibold text-sm flex items-center gap-4 transition-colors ${adminTab === 'settings' ? 'bg-navy text-white' : 'hover:bg-sand text-gray-600'}`}>
                <Settings size={18} /> {lang === 'ar' ? 'الإعدادات' : 'Settings'}
              </button>
              <button className="w-full text-left px-5 py-3 rounded-md font-cairo font-semibold text-sm flex items-center gap-4 text-gray-400 cursor-not-allowed">
                <Package size={18} /> {texts.exportPDF}
              </button>
            </div>
            <div className="p-6 border-t border-gray-100">
               <button onClick={() => { setIsAdminAuthenticated(false); navigateTo('home'); }} className="w-full px-5 py-3 bg-red-50 text-red-600 rounded-md font-cairo font-semibold text-sm flex justify-center items-center gap-3">
                  <LogOut size={18} /> {texts.logout}
               </button>
            </div>
          </div>
          
          <div className="flex-1 p-6 md:p-12 overflow-y-auto">
             {adminTab === 'products' && (
                <div className="max-w-6xl mx-auto">
                   <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-cairo text-navy font-bold">{texts.manageProducts}</h2>
                    <button onClick={() => setAdminTab('add_product')} className="bg-navy text-white px-6 py-2 rounded-lg font-cairo flex items-center gap-2">
                      <Plus size={18} /> {texts.addNewProduct}
                    </button>
                   </div>
                   <div className="bg-white border border-gray-200 overflow-x-auto rounded-xl shadow-sm">
                      <table className={`w-full text-${lang === 'ar' ? 'right' : 'left'} min-w-[700px]`}>
                         <thead className="bg-sand border-b border-gray-200">
                           <tr>
                             <th className="p-4 font-cairo text-xs uppercase tracking-widest text-gray-500">ID</th>
                             <th className="p-4 font-cairo text-xs uppercase tracking-widest text-gray-500">{texts.productName}</th>
                             <th className="p-4 font-cairo text-xs uppercase tracking-widest text-gray-500">{texts.productCategory}</th>
                             <th className="p-4 font-cairo text-xs uppercase tracking-widest text-gray-500">{texts.productPrice}</th>
                             <th className="p-4 font-cairo text-xs uppercase tracking-widest text-gray-500">{lang === 'ar' ? 'الإجراءات' : 'Actions'}</th>
                           </tr>
                         </thead>
                         <tbody>
                           {products.map(p => (
                             <tr key={p.id} className="border-b border-gray-100 last:border-0 hover:bg-sand/30 transition-colors">
                               <td className="p-4 text-gray-400 text-sm">{p.id}</td>
                               <td className="p-4 font-cairo text-navy flex items-center gap-4">
                                  <div className="w-12 h-12 bg-sand overflow-hidden rounded-lg">
                                    <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
                                  </div>
                                  <span className="font-semibold">{getName(p)}</span>
                               </td>
                               <td className="p-4 text-gray-500 text-sm font-cairo">{getCat(p)}</td>
                               <td className="p-4 text-navy font-semibold font-cairo">{getPrice(p)}</td>
                               <td className="p-4">
                                 <div className="flex items-center gap-3">
                                   <button onClick={() => setProducts(products.map(pr => pr.id === p.id ? {...pr, visible: !pr.visible} : pr))} className={`p-2 rounded-lg ${p.visible ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                      {p.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                                   </button>
                                   <button onClick={() => setProducts(products.filter(pr => pr.id !== p.id))} className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
                                      <Trash2 size={18} />
                                   </button>
                                 </div>
                               </td>
                             </tr>
                           ))}
                         </tbody>
                      </table>
                   </div>
                </div>
             )}

             {adminTab === 'settings' && (
               <div className="max-w-2xl mx-auto">
                 <h2 className="text-3xl font-cairo text-navy font-bold mb-10">{lang === 'ar' ? 'إعدادات المتجر' : 'Store Settings'}</h2>
                 <div className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm space-y-8">
                   <div className="flex items-center justify-between">
                     <div>
                       <h4 className="font-cairo font-bold text-navy text-lg">{texts.showPrices}</h4>
                       <p className="text-gray-500 text-sm font-cairo">{lang === 'ar' ? 'سيتمكن جميع الزوار من رؤية الأسعار في الكتالوج' : 'All visitors will see prices in the catalog'}</p>
                     </div>
                     <button 
                        onClick={() => setShowPricesPublicly(!showPricesPublicly)}
                        className={`w-14 h-8 rounded-full relative transition-colors ${showPricesPublicly ? 'bg-navy' : 'bg-gray-200'}`}
                     >
                       <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${lang === 'ar' ? (showPricesPublicly ? 'left-1' : 'left-7') : (showPricesPublicly ? 'right-1' : 'right-7')}`}></div>
                     </button>
                   </div>
                 </div>
               </div>
             )}
          </div>
        </div>
      )}

      {/* HOME PAGE */}
      {activePage === 'home' && (
        <div className="animate-fade-in">
          {/* HERO / ABOUT US SECTION */}
          <section className="bg-white py-24 border-b border-gray-100">
            <div className="max-w-screen-md mx-auto px-6 text-center">
              <div className="mb-8 flex justify-center">
                <img src="/images/logo.png" alt="Logo" className="h-24 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-cairo text-navy mb-8 font-bold leading-tight">{texts.storeName}</h1>
              <p className="text-lg md:text-xl text-gray-600 font-cairo leading-relaxed mb-10">
                {texts.aboutStore}
              </p>
              <div className="w-16 h-1 bg-gold mx-auto"></div>
            </div>
          </section>

      {/* CATALOG SECTION */}
          <CatalogView 
            lang={lang}
            texts={texts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            appCategories={appCategories}
            products={products}
            showPricesPublicly={showPricesPublicly}
            activePage={activePage}
            cart={cart}
            updateCart={updateCart}
            setZoomImage={setZoomImage}
            setIsZoomOpen={setIsZoomOpen}
          />

          {/* FLOATING ORDER BUTTON */}
          <button 
            onClick={() => navigateTo('order')}
            className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-auto bg-navy text-white px-8 py-4 rounded-full font-cairo font-bold text-lg shadow-2xl hover:scale-105 transition-transform z-50 flex items-center justify-center gap-4 border-2 border-white/20"
          >
            <ShoppingBag size={24} />
            {texts.makeOrder}
            <span className="bg-gold text-navy w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2">
              {Object.values(cart).reduce((a, b) => a + b, 0)}
            </span>
          </button>
        </div>
      )}

      {/* CATALOG PAGE (Same as Home but without About section) */}
      {activePage === 'products' && (
        <div className="animate-fade-in py-16">
          <h1 className="text-4xl font-cairo text-navy text-center mb-16 font-bold">{texts.products}</h1>
          <CatalogView 
            lang={lang}
            texts={texts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            appCategories={appCategories}
            products={products}
            showPricesPublicly={showPricesPublicly}
            activePage={activePage}
            cart={cart}
            updateCart={updateCart}
            setZoomImage={setZoomImage}
            setIsZoomOpen={setIsZoomOpen}
          />
        </div>
      )}

      {/* ORDER PAGE */}
      {activePage === 'order' && (
        <OrderPage 
          lang={lang}
          texts={texts}
          appCategories={appCategories}
          products={products}
          cart={cart}
          updateCart={updateCart}
          navigateTo={navigateTo}
          setCart={setCart}
        />
      )}

      {/* ABOUT PAGE */}
      {activePage === 'about' && (
        <AboutPage 
          texts={texts}
          lang={lang}
        />
      )}

      {/* ZOOM MODAL */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setIsZoomOpen(false)}>
          <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
            <X size={40} />
          </button>
          <img src={zoomImage} alt="Zoom" className="max-w-full max-h-full object-contain shadow-2xl animate-zoom-in" />
        </div>
      )}

      {/* AUTH MODAL */}
      {isAdminAuthOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-10 max-w-md w-full relative rounded-2xl shadow-2xl">
            <button onClick={() => setIsAdminAuthOpen(false)} className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} text-gray-400 hover:text-navy transition-colors`}><X size={24} /></button>
            <div className="mb-10 text-center">
               <h2 className="text-2xl font-cairo text-navy uppercase tracking-widest">{lang === 'ar' ? 'دخول الإدارة' : 'Admin Login'}</h2>
               <div className="w-12 h-px bg-gold mx-auto mt-4"></div>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (e.target.username.value === 'admin' && e.target.password.value === '123') {
                setIsAdminAuthenticated(true);
                setIsAdminAuthOpen(false);
                setActivePage('admin');
              } else {
                setAuthError(lang === 'ar' ? 'بيانات غير صحيحة' : 'Invalid credentials');
              }
            }} className="space-y-6">
              <input required name="username" type="text" placeholder="Username" className="w-full p-4 border-b border-gray-300 outline-none font-cairo" dir="ltr" />
              <input required name="password" type="password" placeholder="Password" className="w-full p-4 border-b border-gray-300 outline-none font-cairo" dir="ltr" />
              {authError && <p className="text-red-500 text-sm font-cairo text-center">{authError}</p>}
              <button type="submit" className="w-full py-4 bg-navy text-white font-cairo font-bold rounded-xl hover:bg-navy/90 transition-colors">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      {activePage !== 'admin' && (
        <footer className="bg-white border-t border-gray-100 py-16 mt-auto">
          <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
                <span className="font-cairo font-bold text-2xl text-navy">{texts.storeName}</span>
              </div>
              <p className="text-gray-500 max-w-sm font-cairo leading-relaxed">{texts.aboutStore.substring(0, 100)}...</p>
            </div>
            <div>
              <h4 className="font-cairo font-bold text-navy mb-6">{lang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}</h4>
              <ul className="space-y-3 font-cairo text-sm text-gray-400">
                <li className="flex items-center gap-2"><Phone size={14} /> +966 50 000 0000</li>
                <li className="flex items-center gap-2"><Mail size={14} /> info@freezedry.com</li>
                <li className="flex items-center gap-2"><MapPin size={14} /> {texts.addressValue}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-cairo font-bold text-navy mb-6">{texts.quickLinks}</h4>
              <ul className="space-y-3 font-cairo text-sm text-gray-400">
                <li><button onClick={() => navigateTo('home')} className="hover:text-navy">{texts.home}</button></li>
                <li><button onClick={() => navigateTo('products')} className="hover:text-navy">{texts.products}</button></li>
                <li><button className="hover:text-navy">{texts.privacy}</button></li>
              </ul>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto px-6 pt-12 mt-12 border-t border-gray-50 text-center text-gray-400 text-xs font-cairo">
            <p>{texts.copyright.replace('{year}', new Date().getFullYear())}</p>
          </div>
        </footer>
      )}

    </div>
  );
}
