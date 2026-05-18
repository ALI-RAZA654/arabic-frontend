import { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ShoppingBag, Settings, Plus, Eye, EyeOff, XCircle, ShoppingCart, Globe, Phone, Mail, MapPin, LayoutDashboard, Tags, Package, LogOut, Trash2, Download, FileText, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    login: 'تسجيل الدخول',
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
    username: 'Username',
    password: 'Password',
    login: 'Login',
  }
};

const getName = (p, lang) => (p.name?.[lang] || p.name || "").toString();
const getCat = (p, lang) => (p.category?.[lang] || p.category || "").toString();
const getPrice = (p, lang) => (p.price?.[lang] || p.price || "").toString();
const getDesc = (p, lang) => (p.description?.[lang] || p.description || "").toString();

const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  const num = parseFloat(priceStr.toString().replace(/[^0-9.]/g, ''));
  return isNaN(num) ? 0 : num;
};

const getProductFallbackImage = (p) => {
  const name = (p.name?.en || p.name?.ar || p.nameAr || p.nameEn || p.name || '').toLowerCase();
  if (name.includes('chocolate') || name.includes('شوكولاتة')) return '/images/branden-skeli-CnTdVeDmTaQ-unsplash.jpg';
  if (name.includes('fruit') || name.includes('sour') || name.includes('فواكه') || name.includes('حمض') || name.includes('ليمون')) return '/images/yes-and-studio-XVYz_QeiEBw-unsplash.jpg';
  if (name.includes('candy') || name.includes('sweet') || name.includes('حلويات')) return '/images/candy (1).jpg';
  if (name.includes('gift') || name.includes('باقة')) return '/images/candy (2).jpg';
  if (name.includes('nut') || name.includes('pistachio') || name.includes('مكسرات')) return '/images/prigles (1).jpg';
  return '/images/candy (1).jpg'; // default premium fallback
};

const compressImage = (base64Str, maxWidth = 800, maxHeight = 800, quality = 0.6) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
  });
};

const exportElement = async (elementId, filename, format = 'pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    alert("Export element not found");
    return;
  }

  // Make visible for capture (it's already positioned off-screen)
  const originalVisibility = element.style.visibility;
  element.style.visibility = 'visible';

  // Wait for fonts to render
  await document.fonts.ready;
  // Small extra delay to ensure layout is painted
  await new Promise(r => setTimeout(r, 300));

  try {
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 800,
      allowTaint: true,
      foreignObjectRendering: false,
    });

    const imgData = canvas.toDataURL('image/png');

    if (format === 'image') {
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `${filename}.png`;
      link.click();
    } else {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      pdf.save(`${filename}.pdf`);
    }
  } catch (err) {
    console.error("Export error:", err);
    alert("Failed to export. Please try again.");
  } finally {
    element.style.visibility = originalVisibility;
  }
};

const ProductCard = ({ product, lang, showPricesPublicly, showControls, activePage, cart, updateCart, setZoomImage, setIsZoomOpen }) => (
  <div
    className={`group cursor-pointer ${!product.visible ? 'opacity-50 grayscale' : ''} animate-slide-up bg-white p-2 md:p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}
    onClick={() => {
      if (!showControls) {
        setZoomImage(product.images[0]);
        setIsZoomOpen(true);
      }
    }}
  >
    <div className="relative aspect-square overflow-hidden bg-sand mb-2 md:mb-4">
      <img
        src={product.images?.[0] && product.images[0].trim() !== '' ? product.images[0] : getProductFallbackImage(product)}
        alt={getName(product, lang)}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {!showControls && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <Eye className="text-white" size={24} />
        </div>
      )}
    </div>
    <div className="text-center">
      <h3 className="font-cairo text-[10px] md:text-base text-navy leading-tight mb-1 md:mb-2 font-bold line-clamp-2 h-6 md:h-10">{getName(product, lang)}</h3>
      {(showPricesPublicly || showControls || activePage === 'admin') && (
        <div className="text-gold font-bold font-cairo text-[9px] md:text-sm mb-1 md:mb-3">
          {getPrice(product, lang)}
        </div>
      )}

      {showControls && (
        <div className="flex items-center justify-center gap-1 md:gap-4 mt-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => updateCart(product.id, -1)}
            className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center bg-sand text-navy rounded-full hover:bg-gray-200"
          >
            <XCircle size={12} />
          </button>
          <span className="font-bold font-cairo w-4 md:w-8 text-[10px] md:text-base text-center">{cart[product.id] || 0}</span>
          <button
            onClick={() => updateCart(product.id, 1)}
            className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center bg-navy text-white rounded-full hover:bg-navy/80"
          >
            <Plus size={12} />
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
    const categoryName = category.name[lang] || category.name;
    const categoryProducts = products.filter(p => {
      const isInCategory = (p.category[lang] === categoryName || p.category === categoryName || p.category[lang] === category.name.en || p.category === category.name.en);
      if (!isInCategory || !p.visible) return false;

      const nameAr = normalizeArabic(getName(p, 'ar').toLowerCase());
      const nameEn = getName(p, 'en').toLowerCase();
      const descAr = normalizeArabic(getDesc(p, 'ar').toLowerCase());
      const descEn = getDesc(p, 'en').toLowerCase();

      return (
        nameAr.includes(normalizedQuery) ||
        nameEn.includes(trimmedQuery) ||
        descAr.includes(normalizedQuery) ||
        descEn.includes(trimmedQuery) ||
        categoryName.toLowerCase().includes(trimmedQuery) ||
        normalizeArabic(categoryName).includes(normalizedQuery)
      );
    });
    return { ...category, filteredProducts: categoryProducts };
  }).filter(c => c.filteredProducts.length > 0);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* SEARCH BAR */}
      <div className="mb-12 flex items-center justify-center">
        <div className="relative w-full max-w-md group">
          <input
            type="text"
            placeholder={texts.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full bg-white border border-gray-100 rounded-full ${lang === 'ar' ? 'pr-12 pl-12' : 'pl-12 pr-12'} py-4 focus:border-navy outline-none transition-all text-sm font-cairo shadow-sm`}
          />
          <Search className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-4 text-gray-400 group-focus-within:text-navy transition-colors`} size={20} />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute ${lang === 'ar' ? 'left-4' : 'right-4'} top-4 text-gray-400 hover:text-navy transition-colors`}
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
            <div className="mb-12 relative h-48 md:h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-default">
              <img 
                src={category.image} 
                alt={category.name[lang]} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/40 to-navy/70 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-1 bg-gold mb-4 animate-pulse"></div>
                <h2 className="text-4xl md:text-6xl font-cairo text-white font-bold drop-shadow-2xl tracking-tight">
                  {category.name[lang] || category.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6">
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

const OrderPage = ({ lang, texts, appCategories, products, cart, updateCart, navigateTo, setCart }) => {
  const [orderSuccess, setOrderSuccess] = useState(null);

  if (orderSuccess) {
    return (
      <div className="max-w-screen-md mx-auto px-4 py-24 text-center animate-fade-in">
        <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-2xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-4xl font-cairo text-navy font-bold mb-4">{lang === 'ar' ? 'تم استلام طلبك!' : 'Order Received!'}</h1>
          <p className="text-gray-500 font-cairo text-lg mb-12">{lang === 'ar' ? 'شكراً لثقتك بنا. يمكنك تحميل ملخص الطلب أدناه.' : 'Thank you for your trust. You can download your order summary below.'}</p>

          {/* HIDDEN EXPORT AREA - off-screen so fonts always load */}
          <div
            id="client-order-export"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            style={{
              position: 'fixed',
              top: 0,
              left: '-9999px',
              width: '800px',
              background: 'white',
              fontFamily: "'Cairo', 'Noto Kufi Arabic', sans-serif",
              zIndex: -1,
              visibility: 'hidden',
            }}
          >
            {/* Header Logo/Store Name */}
            <div className="bg-navy p-8 text-white flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold font-cairo uppercase tracking-widest">FREEZE DRY</h2>
                <p className="text-xs opacity-70 mt-1">{lang === 'ar' ? 'حلويات فاخرة مجففة بالتجميد' : 'Premium Freeze-Dried Sweets'}</p>
              </div>
              <div className="text-left">
                <p className="text-xs opacity-50" style={{letterSpacing: lang === 'ar' ? '0' : '0.1em'}}>{lang === 'ar' ? 'رقم الطلب' : 'Order ID'}</p>
                <p className="text-xl font-bold">#{orderSuccess.id}</p>
              </div>
            </div>

            <div className="p-10">
              {/* SHIPPING INFO BLOCK */}
              <div className="mb-8 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-navy/5 p-4 border-b border-gray-100">
                  <h3 className="text-sm font-bold font-cairo text-navy">{lang === 'ar' ? 'معلومات الشحن' : 'Shipping Information'}</h3>
                </div>
                <div className="grid grid-cols-2 bg-white divide-x divide-y divide-gray-100 rtl:divide-x-reverse">
                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-[10px] text-gray-400" style={{letterSpacing: lang === 'ar' ? '0' : '0.05em'}}>{lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}</span>
                    <span className="text-sm font-bold text-navy">{orderSuccess.customer.name}</span>
                  </div>
                  <div className="p-4 flex flex-col gap-1 items-center text-center">
                    <span className="text-[10px] text-gray-400" style={{letterSpacing: lang === 'ar' ? '0' : '0.05em'}}>{lang === 'ar' ? 'رقم الجوال' : 'Phone Number'}</span>
                    <span className="text-sm font-bold text-navy" dir="ltr">{orderSuccess.customer.phone}</span>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-[10px] text-gray-400" style={{letterSpacing: lang === 'ar' ? '0' : '0.05em'}}>{lang === 'ar' ? 'المدينة' : 'City'}</span>
                    <span className="text-sm font-bold text-navy">{orderSuccess.customer.city}</span>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-[10px] text-gray-400" style={{letterSpacing: lang === 'ar' ? '0' : '0.05em'}}>{lang === 'ar' ? 'عنوان السكن' : 'Address'}</span>
                    <span className="text-sm font-bold text-navy">{orderSuccess.customer.address}</span>
                  </div>
                </div>
              </div>

              {/* PRODUCTS TABLE */}
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <thead className="bg-navy text-white text-xs font-cairo">
                  <tr>
                    <th className="p-4 text-center w-12">#</th>
                    <th className="p-4 text-right">{lang === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}</th>
                    <th className="p-4 text-center w-20">{lang === 'ar' ? 'الكمية' : 'Qty'}</th>
                    <th className="p-4 text-center w-32">{lang === 'ar' ? 'السعر' : 'Price'}</th>
                    <th className="p-4 text-center w-32">{lang === 'ar' ? 'المجموع' : 'Total'}</th>
                  </tr>
                </thead>
                <tbody className="font-cairo">
                  {orderSuccess.items.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 text-center text-gray-400 font-bold border-b border-gray-100">{idx + 1}</td>
                      <td className="p-4 border-b border-gray-100">
                        <div className="flex items-center gap-4">
                          {item.image && <img src={item.image} className="w-12 h-12 object-cover rounded-lg shadow-sm" alt="" />}
                          <span className="text-sm font-bold text-navy">{item.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center border-b border-gray-100">
                        <span className="bg-sand px-3 py-1 rounded-full text-xs font-bold text-navy">{item.qty}</span>
                      </td>
                      <td className="p-4 text-center border-b border-gray-100 text-sm font-bold text-gray-500">{item.price}</td>
                      <td className="p-4 text-center border-b border-gray-100 text-sm font-bold text-navy">
                        {parsePrice(item.price) * item.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* TOTALS SECTION */}
              <div className="flex flex-col items-end gap-2 font-cairo">
                <div className="flex justify-between w-64 border-b border-gray-100 pb-2">
                  <span className="text-gray-400 text-sm">{lang === 'ar' ? 'إجمالي المنتجات' : 'Subtotal'}</span>
                  <span className="font-bold text-navy">
                    {orderSuccess.items.reduce((sum, item) => sum + (parsePrice(item.price) * item.qty), 0)}
                  </span>
                </div>
                <div className="flex justify-between w-64 border-b border-gray-100 pb-2">
                  <span className="text-gray-400 text-sm">{lang === 'ar' ? 'رسوم التوصيل' : 'Delivery Fee'}</span>
                  <span className="font-bold text-navy">0</span>
                </div>
                <div className="flex justify-between w-64 bg-navy p-4 rounded-xl text-white mt-2">
                  <span className="font-bold">{lang === 'ar' ? 'المجموع النهائي' : 'Grand Total'}</span>
                  <span className="text-xl font-bold">
                    {orderSuccess.items.reduce((sum, item) => sum + (parsePrice(item.price) * item.qty), 0)}
                  </span>
                </div>
              </div>

              {/* FOOTER MESSAGE */}
              <div className="mt-16 text-center border-t-2 border-dashed border-gray-100 pt-8">
                <p className="text-lg font-cairo font-bold text-navy">
                  {lang === 'ar' ? 'شكراً لتسوقكم من متجرنا ♥' : 'Thank you for shopping from our store ♥'}
                </p>
                <p className="text-[10px] text-gray-300 mt-2">
                  {lang === 'ar' ? 'هذا المستند تم إنشاؤه تلقائياً' : 'This document was automatically generated'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <button
              onClick={() => exportElement('client-order-export', `order-${orderSuccess.id}`, 'pdf')}
              className="flex items-center justify-center gap-3 py-4 bg-navy text-white font-bold rounded-xl hover:shadow-xl transition-all font-cairo"
            >
              <FileText size={20} /> {lang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
            </button>
            <button
              onClick={() => exportElement('client-order-export', `order-${orderSuccess.id}`, 'image')}
              className="flex items-center justify-center gap-3 py-4 bg-sand text-navy font-bold rounded-xl hover:shadow-xl transition-all font-cairo"
            >
              <ImageIcon size={20} /> {lang === 'ar' ? 'حفظ كصورة' : 'Save as Image'}
            </button>
          </div>

          <button onClick={() => navigateTo('home')} className="text-gray-400 hover:text-navy font-cairo border-b border-transparent hover:border-navy transition-all">
            {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="text-4xl font-cairo text-navy text-center mb-12 font-bold">{texts.orderPage}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ORDER SUMMARY FORM (First in DOM for mobile top) */}
        <div className={`w-full lg:w-[360px] flex-shrink-0 order-first ${lang === 'ar' ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="bg-white p-6 border border-gray-200 shadow-xl rounded-2xl sticky top-24">
            <h2 className="text-xl font-cairo font-bold text-navy mb-6 border-b pb-4">{texts.orderSummary}</h2>

            <form className="space-y-4" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              
              const backendItems = Object.entries(cart).map(([id, qty]) => {
                const p = products.find(prod => prod.id == id);
                return {
                  productId: id,
                  nameAr: p ? p.name.ar : 'Unknown',
                  nameEn: p ? p.name.en : 'Unknown',
                  price: p ? parsePrice(p.price.en) : 0,
                  qty,
                  image: p ? p.images[0] : ''
                };
              });
              
              const totalAmount = backendItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

              const orderPayload = {
                customerName: formData.get('fullName'),
                customerPhone: formData.get('phone'),
                customerAddress: `${formData.get('city')} - ${formData.get('address')}`,
                totalAmount,
                items: backendItems,
                language: lang
              };

              try {
                const res = await fetch('/api/orders', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(orderPayload)
                });
                const data = await res.json();
                
                if (data.success) {
                  const dbOrder = data.data;
                  setOrderSuccess({
                    id: dbOrder._id,
                    customer: {
                      name: formData.get('fullName'),
                      city: formData.get('city'),
                      phone: formData.get('phone'),
                      address: formData.get('address')
                    },
                    items: Object.entries(cart).map(([id, qty]) => {
                      const p = products.find(prod => prod.id == id);
                      return {
                        id,
                        name: p ? getName(p, lang) : 'Unknown',
                        image: p ? p.images[0] : null,
                        price: p ? getPrice(p, lang) : '0',
                        qty
                      };
                    }),
                  });
                  setCart({});
                } else {
                  alert(lang === 'ar' ? 'حدث خطأ أثناء إرسال الطلب' : 'Error submitting order');
                }
              } catch (err) {
                console.error(err);
                alert(lang === 'ar' ? 'حدث خطأ أثناء إرسال الطلب' : 'Error submitting order');
              }
            }}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-cairo text-gray-400 mb-1">{texts.fullName}</label>
                <input required name="fullName" type="text" className="w-full p-2.5 bg-warmwhite border-b border-gray-200 focus:border-navy outline-none font-cairo text-sm" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-cairo text-gray-400 mb-1">{texts.city}</label>
                <input required name="city" type="text" className="w-full p-2.5 bg-warmwhite border-b border-gray-200 focus:border-navy outline-none font-cairo text-sm" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-cairo text-gray-400 mb-1">{texts.phoneNumber}</label>
                <input required name="phone" type="tel" className="w-full p-2.5 bg-warmwhite border-b border-gray-200 focus:border-navy outline-none font-cairo text-sm text-left" dir="ltr" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-cairo text-gray-400 mb-1">{texts.detailedAddress}</label>
                <textarea required name="address" rows="2" className="w-full p-2.5 bg-warmwhite border border-gray-100 rounded-lg focus:border-navy outline-none font-cairo text-sm resize-none"></textarea>
              </div>

              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-cairo text-gray-400 text-sm">{texts.total}</span>
                  <span className="font-cairo text-xl font-bold text-navy">
                    {Object.values(cart).reduce((a, b) => a + b, 0)} {lang === 'ar' ? 'قطع' : 'items'}
                  </span>
                </div>
                <button type="submit" className="w-full py-4 bg-navy text-white font-cairo font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm">
                  <ShoppingBag size={18} />
                  {texts.submitOrder}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* PRODUCTS LIST */}
        <div className={`flex-1 space-y-8 ${lang === 'ar' ? 'lg:order-2' : 'lg:order-1'}`}>
          {appCategories[lang].filter(c => c.id !== 'all').map((category) => {
            const categoryName = category.name[lang] || category.name;
            const catProducts = products.filter(p => p.category[lang] === categoryName || p.category === categoryName || p.category.en === categoryName);
            return (
              <div key={category.id}>
                <h3 className="text-xl font-cairo font-bold text-navy mb-6 bg-sand p-3 rounded-lg">{categoryName}</h3>
                <div className="grid grid-cols-4 sm:grid-cols-3 gap-2 md:gap-4">
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
      </div>
    </div>
  );
};

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

const AdminView = ({ lang, products, setProducts, appCategories, setAppCategories, bannerData, setBannerData, footerData, setFooterData, showPricesPublicly, setShowPricesPublicly, adminTab, setAdminTab, navigateTo, setIsAdminAuthenticated }) => {
  const [orders, setOrders] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [exportOrder, setExportOrder] = useState(null);
  const [productImage, setProductImage] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (adminTab === 'orders') {
        try {
          const token = localStorage.getItem('adminToken');
          const res = await fetch('/api/admin/orders', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          if (data.success) {
            setOrders(data.data.map(o => ({
              id: o._id,
              date: new Date(o.createdAt).toLocaleString(),
              customer: {
                name: o.customerName,
                phone: o.customerPhone,
                city: o.customerAddress.split(' - ')[0] || '',
                address: o.customerAddress.split(' - ')[1] || o.customerAddress
              },
              items: o.items.map(item => ({
                id: item.productId,
                name: lang === 'ar' ? item.nameAr : item.nameEn,
                qty: item.qty,
                price: item.price,
                image: item.image
              }))
            })));
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchOrders();
  }, [adminTab, lang]);

  useEffect(() => {
    if (editingProduct) setProductImage(editingProduct.images[0]);
    else setProductImage('');
  }, [editingProduct]);

  useEffect(() => {
    if (editingCategory) setCategoryImage(editingCategory.image);
    else setCategoryImage('');
  }, [editingCategory]);

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        let imageData = reader.result;
        if (file.type.startsWith('image/')) {
          imageData = await compressImage(reader.result);
        }
        if (type === 'product') setProductImage(imageData);
        else if (type === 'category') setCategoryImage(imageData);
        else if (type === 'banner') {
          setBannerData(prev => ({
            ...prev,
            mediaUrl: imageData,
            mediaType: file.type.startsWith('video') ? 'video' : 'image'
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        setOrders(prev => prev.filter(o => o.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedCatId = formData.get('categoryId');
    const token = localStorage.getItem('adminToken');

    const nameAr = formData.get('nameAr');
    const nameEn = formData.get('nameEn') || nameAr;
    const priceArStr = formData.get('priceAr') || formData.get('priceEn') || '0';
    const descAr = formData.get('descAr') || '';
    const descEn = formData.get('descEn') || descAr;

    const productPayload = {
      nameAr,
      nameEn,
      category: selectedCatId,
      price: parsePrice(priceArStr) || 0,
      descriptionAr: descAr,
      descriptionEn: descEn,
      images: [productImage || formData.get('image') || ''],
      isVisible: editingProduct ? editingProduct.visible : true
    };

    try {
      const url = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
      const method = editingProduct ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(productPayload)
      });
      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        alert(lang === 'ar' ? 'حدث خطأ' : 'Error saving product');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const token = localStorage.getItem('adminToken');

    const nameAr = formData.get('nameAr');
    const nameEn = formData.get('nameEn') || nameAr;

    const categoryPayload = {
      nameAr,
      nameEn,
      slug: (nameEn || 'cat').toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString(36),
      image: categoryImage || formData.get('image') || '/images/cat-all.jpg'
    };

    try {
      const url = editingCategory ? `/api/admin/categories/${editingCategory.id}` : '/api/admin/categories';
      const method = editingCategory ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(categoryPayload)
      });
      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        alert((lang === 'ar' ? 'حدث خطأ: ' : 'Error saving category: ') + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error(err);
      alert((lang === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in pb-20">
      {/* ADMIN HEADER */}
      <div className="bg-navy text-white shadow-lg sticky top-0 z-50">
        {/* Top row: title + store + logout */}
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-gold" size={18} />
            <h1 className="text-sm md:text-xl font-bold font-cairo tracking-widest uppercase">{lang === 'ar' ? 'لوحة التحكم' : 'Admin'}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigateTo('home')} className="text-xs md:text-sm font-cairo border border-white/20 px-3 py-1.5 rounded-lg hover:bg-white/10">{lang === 'ar' ? 'المتجر' : 'Store'}</button>
            <button
              onClick={() => { localStorage.removeItem('adminToken'); localStorage.setItem('activePage', 'home'); setIsAdminAuthenticated(false); navigateTo('home'); }}
              className="text-xs md:text-sm font-cairo bg-red-500/20 text-red-100 px-3 py-1.5 rounded-lg hover:bg-red-500/40 flex items-center gap-1"
            >
              <LogOut size={14} /> {lang === 'ar' ? 'خروج' : 'Logout'}
            </button>
          </div>
        </div>
        {/* Bottom row: PDF export button */}
        <div className="max-w-screen-xl mx-auto px-4 pb-3">
          <button
            onClick={async () => {
              setIsExporting(true);
              await exportElement('catalog-pdf-export', 'product-catalog', 'pdf');
              setIsExporting(false);
            }}
            disabled={isExporting}
            className={`w-full md:w-auto bg-gold text-navy px-4 py-2 rounded-lg font-cairo font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all text-sm ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FileText size={16} className={isExporting ? 'animate-spin' : ''} />
            {isExporting
              ? (lang === 'ar' ? 'جاري التحميل...' : 'Downloading...')
              : (lang === 'ar' ? 'تصدير الكتالوج PDF' : 'Export Catalog PDF')}
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-6 px-4">
        {/* TABS */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {['products', 'categories', 'orders', 'banner', 'settings', 'footer'].map(tab => (
            <button
              key={tab}
              onClick={() => { setAdminTab(tab); localStorage.setItem('adminTab', tab); }}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-xl font-cairo font-bold transition-all whitespace-nowrap shadow-sm border text-xs md:text-sm ${adminTab === tab ? 'bg-navy text-white border-navy ring-2 ring-navy/10 scale-105' : 'bg-white text-gray-400 border-gray-100 hover:border-navy hover:text-navy'}`}
            >
              {tab === 'products' && (lang === 'ar' ? 'المنتجات' : 'Products')}
              {tab === 'categories' && (lang === 'ar' ? 'الأقسام' : 'Categories')}
              {tab === 'settings' && (lang === 'ar' ? 'الإعدادات' : 'Settings')}
              {tab === 'orders' && (lang === 'ar' ? 'الطلبات' : 'Orders')}
              {tab === 'banner' && (lang === 'ar' ? 'البانر' : 'Banner')}
              {tab === 'footer' && (lang === 'ar' ? 'الفوتر' : 'Footer')}
            </button>
          ))}
        </div>

        {/* PRODUCTS TAB */}
        {adminTab === 'products' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold font-cairo text-navy">{lang === 'ar' ? 'إدارة المنتجات' : 'Product Management'}</h2>
              <button onClick={() => { setEditingProduct(null); setIsAddProductOpen(true); }} className="bg-navy text-white px-6 py-3 rounded-xl font-cairo font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                <Plus size={20} /> {lang === 'ar' ? 'إضافة منتج' : 'Add Product'}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(p => (
                <div key={p.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex gap-4 mb-4">
                    <img src={p.images?.[0] && p.images[0].trim() !== '' ? p.images[0] : getProductFallbackImage(p)} className="w-20 h-20 object-cover rounded-xl shadow-inner bg-gray-50" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold font-cairo text-navy truncate">{getName(p, lang)}</h4>
                      <p className="text-xs text-gray-400 font-cairo mt-1">{getCat(p, lang)}</p>
                      <p className="text-sm text-gold font-bold font-cairo mt-1">{getPrice(p, lang)}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                    <div className="flex gap-2">
                      <button onClick={() => { setEditingProduct(p); setIsAddProductOpen(true); }} className="p-2 text-navy hover:bg-navy hover:text-white rounded-lg transition-colors border border-gray-100"><Settings size={18} /></button>
                      <button onClick={async () => {
                        if(confirm('Are you sure?')) {
                          try {
                            const token = localStorage.getItem('adminToken');
                            const res = await fetch(`/api/admin/products/${p.id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
                            if (res.ok) window.location.reload();
                          } catch (e) { console.error(e); }
                        }
                      }} className="p-2 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors border border-gray-100"><Trash2 size={18} /></button>
                    </div>
                    <button
                      onClick={async () => {
                        try {
                          const token = localStorage.getItem('adminToken');
                          const res = await fetch(`/api/admin/products/${p.id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({ isVisible: !p.visible })
                          });
                          if (res.ok) window.location.reload();
                        } catch (e) { console.error(e); }
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-cairo transition-colors ${p.visible ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                    >
                      {p.visible ? (lang === 'ar' ? 'مرئي' : 'Visible') : (lang === 'ar' ? 'مخفي' : 'Hidden')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CATEGORIES TAB */}
        {adminTab === 'categories' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold font-cairo text-navy">{lang === 'ar' ? 'إدارة الأقسام' : 'Category Management'}</h2>
              <button onClick={() => { setEditingCategory(null); setIsAddCategoryOpen(true); }} className="bg-navy text-white px-6 py-3 rounded-xl font-cairo font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                <Plus size={20} /> {lang === 'ar' ? 'إضافة قسم' : 'Add Category'}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {appCategories[lang].filter(c => c.id !== 'all').map(cat => (
                <div key={cat.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm group relative overflow-hidden">
                  <img src={cat.image} className="w-full h-32 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform" />
                  <div className="text-center">
                    <h4 className="font-bold font-cairo text-navy">{cat.name}</h4>
                    <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => { setEditingCategory(cat); setIsAddCategoryOpen(true); }} className="p-2 bg-navy text-white rounded-lg"><Settings size={16} /></button>
                      <button onClick={async () => {
                        if (confirm('Are you sure?')) {
                          try {
                            const token = localStorage.getItem('adminToken');
                            const res = await fetch(`/api/admin/categories/${cat.id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }});
                            if (res.ok) window.location.reload();
                            else {
                              const data = await res.json();
                              alert(data.message || 'Error');
                            }
                          } catch (e) { console.error(e); }
                        }
                      }} className="p-2 bg-red-500 text-white rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {adminTab === 'orders' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
            <div className="p-6 bg-gray-50 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold font-cairo text-navy">{lang === 'ar' ? 'إدارة الطلبات' : 'Order Management'}</h2>
              <span className="bg-navy text-white px-3 py-1 rounded-full text-xs font-bold">{orders.length} {lang === 'ar' ? 'طلبات' : 'Orders'}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <thead className="bg-gray-100 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                  <tr>
                    <th className="p-5">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                    <th className="p-5">{lang === 'ar' ? 'العميل' : 'Customer'}</th>
                    <th className="p-5">{lang === 'ar' ? 'المنتجات' : 'Products'}</th>
                    <th className="p-5 text-center">{lang === 'ar' ? 'المجموع' : 'Total'}</th>
                    <th className="p-5 text-center">{lang === 'ar' ? 'إجراء' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-20 text-center text-gray-300 font-cairo italic">{lang === 'ar' ? 'لا يوجد طلبات حالياً' : 'No orders yet'}</td>
                    </tr>
                  ) : orders.map(order => (
                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-5 text-xs font-cairo text-gray-500 whitespace-nowrap">{order.date}</td>
                      <td className="p-5">
                        <div className="font-bold font-cairo text-navy text-sm">{order.customer.name}</div>
                        <div className="text-[10px] text-gray-400 font-cairo mt-1 tracking-wider uppercase">{order.customer.phone} • {order.customer.city}</div>
                      </td>
                      <td className="p-5">
                        <div className="flex flex-wrap gap-3">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-sand/30 p-1.5 rounded-lg border border-navy/5">
                              {(() => {
                                const img = item.image || products.find(p => String(p.id) === String(item.id))?.images[0];
                                return img ? (
                                  <img src={img} className="w-8 h-8 object-cover rounded-md shadow-sm" alt="" />
                                ) : null;
                              })()}
                              <div className="flex flex-col">
                                <span className="text-navy text-[10px] font-bold">{item.name}</span>
                                <span className="text-gold text-[9px] font-bold">×{item.qty}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-5 text-center text-navy font-bold font-cairo text-sm">
                        {order.items.reduce((sum, item) => sum + (parsePrice(item.price) * item.qty), 0)} ₪
                      </td>
                      <td className="p-5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={async () => {
                              setExportOrder(order);
                              // Wait for state to update and element to be available
                              setTimeout(() => {
                                exportElement('admin-order-export', `order-${order.id}`, 'pdf');
                              }, 100);
                            }}
                            className="text-navy hover:bg-navy hover:text-white p-2 rounded-full transition-all"
                            title="Export PDF"
                          >
                            <FileText size={18} />
                          </button>
                          <button onClick={() => deleteOrder(order.id)} className="text-red-300 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-all"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* BANNER TAB */}
        {adminTab === 'banner' && (
          <div className="max-w-lg bg-white p-10 rounded-3xl border border-gray-100 shadow-sm animate-fade-in mx-auto">
            <h3 className="text-xl font-bold font-cairo text-navy mb-8">{lang === 'ar' ? 'إعدادات البانر' : 'Banner Settings'}</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              
              const payload = {
                bannerTitleAr: formData.get('titleAr'),
                bannerTitleEn: formData.get('titleEn'),
                bannerSubtitleAr: formData.get('subtitleAr'),
                bannerSubtitleEn: formData.get('subtitleEn'),
                bannerMediaType: formData.get('mediaType'),
                bannerMediaUrl: bannerData.mediaUrl,
                showPrices: showPricesPublicly
              };

              try {
                const token = localStorage.getItem('adminToken');
                const res = await fetch('/api/admin/settings', {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                  body: JSON.stringify(payload)
                });
                if (res.ok) {
                  alert(lang === 'ar' ? 'تم حفظ البانر بنجاح!' : 'Banner saved successfully!');
                  window.location.reload();
                } else {
                  alert('Error saving settings');
                }
              } catch(err) {
                console.error(err);
              }
            }} className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Title (AR)</label>
                <input name="titleAr" defaultValue={bannerData.title.ar} className="w-full p-3 border rounded-xl outline-none focus:border-navy" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Title (EN)</label>
                <input name="titleEn" defaultValue={bannerData.title.en} className="w-full p-3 border rounded-xl outline-none focus:border-navy" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Subtitle (AR)</label>
                <input name="subtitleAr" defaultValue={bannerData.subtitle.ar} className="w-full p-3 border rounded-xl outline-none focus:border-navy" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Subtitle (EN)</label>
                <input name="subtitleEn" defaultValue={bannerData.subtitle.en} className="w-full p-3 border rounded-xl outline-none focus:border-navy" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'نوع الميديا' : 'Media Type'}</label>
                <select
                  name="mediaType"
                  defaultValue={bannerData.mediaType}
                  className="w-full p-3 border rounded-xl outline-none focus:border-navy"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed text-center">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => handleImageUpload(e, 'banner')}
                  className="hidden"
                  id="banner-upload"
                />
                <label htmlFor="banner-upload" className="cursor-pointer text-navy font-bold flex flex-col items-center gap-2">
                  <ImageIcon size={24} />
                  {lang === 'ar' ? 'تغيير الميديا (صورة/فيديو)' : 'Change Media (Image/Video)'}
                </label>
                {bannerData.mediaUrl && (
                  <p className="text-[10px] text-green-500 mt-2">
                    {lang === 'ar' ? 'تم اختيار الملف' : 'File selected'}
                  </p>
                )}
              </div>

              <button type="submit" className="w-full py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-all font-cairo shadow-lg flex items-center justify-center gap-2">
                <CheckCircle size={20} />
                {lang === 'ar' ? 'حفظ وتطبيق البانر' : 'Save & Apply Banner'}
              </button>
            </form>
          </div>
        )}

        {/* SETTINGS TAB */}
        {adminTab === 'settings' && (
          <div className="max-w-md bg-white p-10 rounded-3xl border border-gray-100 shadow-sm animate-fade-in mx-auto">
            <h3 className="text-xl font-bold font-cairo text-navy mb-8 flex items-center gap-3">
              <Settings className="text-gold" size={24} />
              {lang === 'ar' ? 'إعدادات المتجر' : 'Store Settings'}
            </h3>
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-50">
              <div>
                <span className="font-cairo font-bold text-navy block">{lang === 'ar' ? 'إظهار الأسعار للجميع' : 'Show prices publicly'}</span>
                <p className="text-xs text-gray-400 mt-1">{lang === 'ar' ? 'السماح لغير المسجلين برؤية الأسعار' : 'Allow visitors to see prices'}</p>
              </div>
              <button
                onClick={async () => {
                  try {
                    const token = localStorage.getItem('adminToken');
                    const payload = {
                      bannerTitleAr: bannerData.title.ar,
                      bannerTitleEn: bannerData.title.en,
                      bannerSubtitleAr: bannerData.subtitle.ar,
                      bannerSubtitleEn: bannerData.subtitle.en,
                      bannerMediaType: bannerData.mediaType,
                      bannerMediaUrl: bannerData.mediaUrl,
                      showPrices: !showPricesPublicly
                    };
                    const res = await fetch('/api/admin/settings', {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                      body: JSON.stringify(payload)
                    });
                    if (res.ok) {
                      setShowPricesPublicly(!showPricesPublicly);
                    }
                  } catch (e) {
                    console.error(e);
                  }
                }}
                className={`w-14 h-8 rounded-full transition-all relative ${showPricesPublicly ? 'bg-navy' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${showPricesPublicly ? (lang === 'ar' ? '-translate-x-7' : 'translate-x-7') : (lang === 'ar' ? '-translate-x-1' : 'translate-x-1')}`}></div>
              </button>
            </div>

            {/* CHANGE PASSWORD SECTION */}
            <div className="py-6 border-b border-gray-50">
              <h4 className="font-cairo font-bold text-navy mb-4 flex items-center gap-2">
                {lang === 'ar' ? 'تغيير كلمة المرور' : 'Change Password'}
              </h4>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const currentPassword = formData.get('currentPassword');
                const newPassword = formData.get('newPassword');
                const confirmPassword = formData.get('confirmPassword');

                if (newPassword !== confirmPassword) {
                  alert(lang === 'ar' ? 'كلمتا المرور غير متطابقتين!' : 'Passwords do not match!');
                  return;
                }

                try {
                  const token = localStorage.getItem('adminToken');
                  const res = await fetch('/api/admin/change-password', {
                    method: 'POST',
                    headers: { 
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ currentPassword, newPassword })
                  });
                  const data = await res.json();
                  if (data.success) {
                    alert(lang === 'ar' ? 'تم تغيير كلمة المرور بنجاح!' : 'Password changed successfully!');
                    e.target.reset();
                  } else {
                    alert(data.message || (lang === 'ar' ? 'حدث خطأ ما' : 'An error occurred'));
                  }
                } catch (err) {
                  console.error(err);
                  alert(lang === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error');
                }
              }} className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    {lang === 'ar' ? 'كلمة المرور الحالية' : 'Current Password'}
                  </label>
                  <input required name="currentPassword" type="password" className="w-full p-2.5 bg-gray-50 border rounded-xl outline-none focus:border-navy text-sm font-cairo" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    {lang === 'ar' ? 'كلمة المرور الجديدة' : 'New Password'}
                  </label>
                  <input required name="newPassword" type="password" className="w-full p-2.5 bg-gray-50 border rounded-xl outline-none focus:border-navy text-sm font-cairo" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                    {lang === 'ar' ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
                  </label>
                  <input required name="confirmPassword" type="password" className="w-full p-2.5 bg-gray-50 border rounded-xl outline-none focus:border-navy text-sm font-cairo" />
                </div>
                <button type="submit" className="w-full py-3 bg-navy text-white font-bold font-cairo rounded-xl hover:bg-navy/90 transition-colors text-sm">
                  {lang === 'ar' ? 'تحديث كلمة المرور' : 'Update Password'}
                </button>
              </form>
            </div>



          </div>
        )}

        {/* FOOTER TAB */}
        {adminTab === 'footer' && (
          <div className="max-w-md bg-white p-10 rounded-3xl border border-gray-100 shadow-sm animate-fade-in mx-auto">
            <h3 className="text-xl font-bold font-cairo text-navy mb-8 flex items-center gap-3">
              {lang === 'ar' ? 'إعدادات الفوتر' : 'Footer Settings'}
            </h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              try {
                const token = localStorage.getItem('adminToken');
                const res = await fetch('/api/admin/settings', {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                  body: JSON.stringify({
                    footerPhone: fd.get('footerPhone'),
                    footerEmail: fd.get('footerEmail'),
                    footerAddressAr: fd.get('footerAddressAr'),
                    footerAddressEn: fd.get('footerAddressEn'),
                    footerCopyrightAr: fd.get('footerCopyrightAr'),
                    footerCopyrightEn: fd.get('footerCopyrightEn'),
                  })
                });
                const data = await res.json();
                if (data.success) {
                  setFooterData({
                    phone: fd.get('footerPhone'),
                    email: fd.get('footerEmail'),
                    addressAr: fd.get('footerAddressAr'),
                    addressEn: fd.get('footerAddressEn'),
                    copyrightAr: fd.get('footerCopyrightAr'),
                    copyrightEn: fd.get('footerCopyrightEn'),
                  });
                  alert(lang === 'ar' ? 'تم حفظ إعدادات الفوتر!' : 'Footer settings saved!');
                }
              } catch (err) { console.error(err); }
            }} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'رقم الهاتف' : 'Phone'}</label>
                <input name="footerPhone" defaultValue={footerData.phone} className="w-full p-3 border rounded-xl outline-none focus:border-navy font-cairo" dir="ltr" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                <input name="footerEmail" defaultValue={footerData.email} className="w-full p-3 border rounded-xl outline-none focus:border-navy font-cairo" dir="ltr" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'العنوان (عربي)' : 'Address (AR)'}</label>
                <input name="footerAddressAr" defaultValue={footerData.addressAr} className="w-full p-3 border rounded-xl outline-none focus:border-navy font-cairo" dir="rtl" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'العنوان (إنجليزي)' : 'Address (EN)'}</label>
                <input name="footerAddressEn" defaultValue={footerData.addressEn} className="w-full p-3 border rounded-xl outline-none focus:border-navy font-cairo" dir="ltr" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'حقوق النشر (عربي)' : 'Copyright (AR)'}</label>
                <input name="footerCopyrightAr" defaultValue={footerData.copyrightAr} className="w-full p-3 border rounded-xl outline-none focus:border-navy font-cairo" dir="rtl" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">{lang === 'ar' ? 'حقوق النشر (إنجليزي)' : 'Copyright (EN)'}</label>
                <input name="footerCopyrightEn" defaultValue={footerData.copyrightEn} className="w-full p-3 border rounded-xl outline-none focus:border-navy font-cairo" dir="ltr" />
              </div>
              <button type="submit" className="w-full py-4 bg-navy text-white font-bold font-cairo rounded-xl hover:bg-navy/90 transition-colors shadow-lg mt-4">
                {lang === 'ar' ? 'حفظ الفوتر' : 'Save Footer'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* HIDDEN ADMIN ORDER EXPORT AREA */}
      {exportOrder && (
        <div 
          id="admin-order-export" 
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          style={{
            position: 'fixed',
            top: '-9999px',
            left: '-9999px',
            width: '800px',
            backgroundColor: 'white',
            padding: '40px',
          }}
        >
          <div className="flex justify-between items-center border-b-2 border-navy pb-6 mb-8">
            <h2 className="text-2xl font-bold font-cairo text-navy uppercase">FREEZE DRY</h2>
            <div className="text-right">
              <p className="text-xs text-gray-400 font-cairo">{lang === 'ar' ? 'رقم الطلب' : 'Order ID'}: #{exportOrder.id}</p>
              <p className="text-xs text-gray-400 font-cairo">{exportOrder.date}</p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">{lang === 'ar' ? 'معلومات العميل' : 'Customer Info'}</h3>
            <div className="grid grid-cols-2 gap-4 font-cairo">
              <div><span className="text-gray-400">{lang === 'ar' ? 'الاسم' : 'Name'}:</span> <span className="text-navy font-bold">{exportOrder.customer.name}</span></div>
              <div><span className="text-gray-400">{lang === 'ar' ? 'الهاتف' : 'Phone'}:</span> <span className="text-navy font-bold">{exportOrder.customer.phone}</span></div>
              <div className="col-span-2"><span className="text-gray-400">{lang === 'ar' ? 'العنوان' : 'Address'}:</span> <span className="text-navy font-bold">{exportOrder.customer.city}, {exportOrder.customer.address}</span></div>
            </div>
          </div>
          <table className="w-full text-right mb-10">
            <thead className="bg-gray-50 border-b">
              <tr className="font-cairo text-xs text-gray-400">
                <th className="p-3">{lang === 'ar' ? 'المنتج' : 'Product'}</th>
                <th className="p-3 text-center">{lang === 'ar' ? 'السعر' : 'Price'}</th>
                <th className="p-3 text-center">{lang === 'ar' ? 'الكمية' : 'Qty'}</th>
                <th className="p-3 text-center">{lang === 'ar' ? 'المجموع' : 'Total'}</th>
              </tr>
            </thead>
            <tbody>
              {exportOrder.items.map((item, idx) => (
                <tr key={idx} className="border-b font-cairo">
                  <td className="p-3 text-navy font-bold">{item.name}</td>
                  <td className="p-3 text-center text-navy font-bold">{item.price}</td>
                  <td className="p-3 text-center text-navy font-bold">{item.qty}</td>
                  <td className="p-3 text-center text-navy font-bold">{parsePrice(item.price) * item.qty} ₪</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mb-10 font-cairo">
            <div className="w-64 bg-gray-50 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">{lang === 'ar' ? 'إجمالي المنتجات' : 'Subtotal'}</span>
                <span className="text-navy font-bold">{exportOrder.items.reduce((sum, item) => sum + (parsePrice(item.price) * item.qty), 0)} ₪</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">{lang === 'ar' ? 'رسوم التوصيل' : 'Delivery Fee'}</span>
                <span className="text-navy font-bold">0 ₪</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="text-navy font-bold uppercase">{lang === 'ar' ? 'المجموع النهائي' : 'Grand Total'}</span>
                <span className="text-gold font-bold text-xl">{exportOrder.items.reduce((sum, item) => sum + (parsePrice(item.price) * item.qty), 0)} ₪</span>
              </div>
            </div>
          </div>
          <div className="text-center text-[10px] text-gray-300 font-cairo mt-10">
            {lang === 'ar' ? 'شكراً لشرائكم من فريز دراي' : 'Thank you for shopping at Freeze Dry'}
          </div>
        </div>
      )}

      {/* ADD/EDIT PRODUCT MODAL */}
      {(isAddProductOpen || editingProduct) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button onClick={() => { setIsAddProductOpen(false); setEditingProduct(null); }} className="absolute top-6 right-6 text-gray-400 hover:text-navy"><X size={24} /></button>
            <h2 className="text-2xl font-bold font-cairo text-navy mb-8">
              {editingProduct ? (lang === 'ar' ? 'تعديل منتج' : 'Edit Product') : (lang === 'ar' ? 'إضافة منتج جديد' : 'Add New Product')}
            </h2>
            <form onSubmit={handleSaveProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name (AR)</label>
                <input required name="nameAr" defaultValue={editingProduct?.name.ar} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name (EN)</label>
                <input name="nameEn" defaultValue={editingProduct?.name.en} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{lang === 'ar' ? 'الفئة' : 'Category'}</label>
                <select
                  required
                  name="categoryId"
                  defaultValue={appCategories.en.find(c => c.name === editingProduct?.category.en)?.id}
                  className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy appearance-none cursor-pointer"
                >
                  <option value="" disabled>{lang === 'ar' ? 'اختر الفئة' : 'Select Category'}</option>
                  {appCategories[lang].filter(c => c.id !== 'all').map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price (AR)</label>
                <input required name="priceAr" defaultValue={editingProduct?.price.ar} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price (EN)</label>
                <input name="priceEn" defaultValue={editingProduct?.price.en} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy" />
              </div>
              <div className="md:col-span-2 space-y-4 bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <ImageIcon size={16} /> {lang === 'ar' ? 'صورة المنتج' : 'Product Image'}
                </label>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {productImage && (
                    <div className="relative w-32 h-32 flex-shrink-0 group">
                      <img src={productImage} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-white" alt="Preview" />
                      <button
                        type="button"
                        onClick={() => setProductImage('')}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  <div className="flex-1 w-full">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'product')}
                      className="hidden"
                      id="product-image-upload"
                    />
                    <label
                      htmlFor="product-image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-white transition-all group"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Plus className="text-gray-400 group-hover:text-navy mb-2" size={24} />
                        <p className="text-sm text-gray-500 font-cairo">
                          {lang === 'ar' ? 'اضغط لرفع صورة' : 'Click to upload image'}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Description (AR)</label>
                <textarea name="descAr" defaultValue={editingProduct?.description.ar} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy h-20" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Description (EN)</label>
                <textarea name="descEn" defaultValue={editingProduct?.description.en} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy h-20" />
              </div>
              <button type="submit" className="md:col-span-2 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-all font-cairo">
                {lang === 'ar' ? 'حفظ البيانات' : 'Save Product'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ADD/EDIT CATEGORY MODAL */}
      {(isAddCategoryOpen || editingCategory) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button onClick={() => { setIsAddCategoryOpen(false); setEditingCategory(null); }} className="absolute top-6 right-6 text-gray-400 hover:text-navy"><X size={24} /></button>
            <h2 className="text-2xl font-bold font-cairo text-navy mb-8">
              {editingCategory ? (lang === 'ar' ? 'تعديل قسم' : 'Edit Category') : (lang === 'ar' ? 'إضافة قسم جديد' : 'Add New Category')}
            </h2>
            <form onSubmit={handleSaveCategory} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">ID (Internal)</label>
                <input required name="id" defaultValue={editingCategory?.id} readOnly={!!editingCategory} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy read-only:bg-gray-100" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name (AR)</label>
                <input required name="nameAr" defaultValue={editingCategory ? (lang === 'ar' ? editingCategory.name : '') : ''} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Name (EN)</label>
                <input name="nameEn" defaultValue={editingCategory ? (lang === 'en' ? editingCategory.name : '') : ''} className="w-full p-3 bg-gray-50 border rounded-xl font-cairo outline-none focus:border-navy" />
              </div>
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <ImageIcon size={16} /> {lang === 'ar' ? 'صورة القسم' : 'Category Image'}
                </label>
                <div className="flex flex-col gap-4 items-center">
                  {categoryImage && (
                    <div className="relative w-full h-32 group">
                      <img src={categoryImage} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-white" alt="Preview" />
                      <button
                        type="button"
                        onClick={() => setCategoryImage('')}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  <div className="w-full">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'category')}
                      className="hidden"
                      id="category-image-upload"
                    />
                    <label
                      htmlFor="category-image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-white transition-all group"
                    >
                      <Plus className="text-gray-400 group-hover:text-navy mb-2" size={24} />
                      <p className="text-xs text-gray-500 font-cairo">
                        {lang === 'ar' ? 'رفع صورة القسم' : 'Upload Category Image'}
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-all font-cairo">
                {lang === 'ar' ? 'حفظ القسم' : 'Save Category'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const [activePage, setActivePage] = useState(() => localStorage.getItem('activePage') || 'home');
  const [products, setProducts] = useState([]);
  const [appCategories, setAppCategories] = useState({ ar: [], en: [] });
  const [searchQuery, setSearchQuery] = useState('');

  const [showPricesPublicly, setShowPricesPublicly] = useState(false);
  const [cart, setCart] = useState({});
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);

  const [adminTab, setAdminTab] = useState(() => localStorage.getItem('adminTab') || 'products');
  const [isAdminAuthOpen, setIsAdminAuthOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => !!localStorage.getItem('adminToken'));
  const [authError, setAuthError] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [bannerData, setBannerData] = useState({
    title: { ar: 'عالم من النكهات', en: 'World of Flavors' },
    subtitle: { ar: 'حلويات فاخرة مجففة بالتجميد', en: 'Premium Freeze-Dried Sweets' },
    mediaUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=2000',
    mediaType: 'image'
  });

  const [footerData, setFooterData] = useState({
    phone: '+966 50 000 0000',
    email: 'info@freezedry.com',
    addressAr: 'الرياض، المملكة العربية السعودية',
    addressEn: 'Riyadh, Saudi Arabia',
    copyrightAr: 'جميع الحقوق محفوظة © {year} فريز دراي.',
    copyrightEn: 'All rights reserved © {year} Freeze Dry.',
  });

  const getCategoryFallbackImage = (slug, nameEn) => {
    const s = (slug || nameEn || '').toLowerCase();
    if (s.includes('chocolate') || s.includes('شوكولاتة')) return '/images/branden-skeli-CnTdVeDmTaQ-unsplash.jpg';
    if (s.includes('fruit') || s.includes('fruct') || s.includes('lemon') || s.includes('فواكه') || s.includes('ليمون')) return '/images/yes-and-studio-XVYz_QeiEBw-unsplash.jpg';
    if (s.includes('sweet') || s.includes('candy') || s.includes('luxury') || s.includes('حلويات')) return '/images/candy (1).jpg';
    if (s.includes('gift') || s.includes('هدايا')) return '/images/candy (2).jpg';
    if (s.includes('beverage') || s.includes('drink') || s.includes('مشروبات')) return '/images/down (1).png';
    if (s.includes('biscuit') || s.includes('snack') || s.includes('nut') || s.includes('مكسرات') || s.includes('بسكويت')) return '/images/prigles (1).jpg';
    return '/images/yes-and-studio-XVYz_QeiEBw-unsplash.jpg';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('adminToken');

        const [settingsRes, categoriesRes, productsRes] = await Promise.all([
          fetch('/api/settings').then(res => res.json()),
          fetch('/api/categories').then(res => res.json()),
          token
            ? fetch('/api/admin/products', { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json())
            : fetch('/api/products?limit=200').then(res => res.json())
        ]);

        if (settingsRes.success && settingsRes.data) {
          setShowPricesPublicly(settingsRes.data.showPrices);
          setBannerData({
            title: { ar: settingsRes.data.bannerTitleAr || 'عالم من النكهات', en: settingsRes.data.bannerTitleEn || 'World of Flavors' },
            subtitle: { ar: settingsRes.data.bannerSubtitleAr || '', en: settingsRes.data.bannerSubtitleEn || '' },
            mediaUrl: settingsRes.data.bannerMediaUrl || 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=2000',
            mediaType: settingsRes.data.bannerMediaType || 'image'
          });
          setFooterData({
            phone: settingsRes.data.footerPhone || '+966 50 000 0000',
            email: settingsRes.data.footerEmail || 'info@freezedry.com',
            addressAr: settingsRes.data.footerAddressAr || 'الرياض، المملكة العربية السعودية',
            addressEn: settingsRes.data.footerAddressEn || 'Riyadh, Saudi Arabia',
            copyrightAr: settingsRes.data.footerCopyrightAr || 'جميع الحقوق محفوظة © {year} فريز دراي.',
            copyrightEn: settingsRes.data.footerCopyrightEn || 'All rights reserved © {year} Freeze Dry.',
          });
        }

        if (categoriesRes.success && categoriesRes.data) {
          const catsAr = categoriesRes.data.map(c => {
            let img = c.image;
            if (!img || img.includes('cat-') || img === '/images/cat-all.jpg') {
              img = getCategoryFallbackImage(c.slug, c.nameEn || c.nameAr);
            }
            return { id: c._id, name: c.nameAr, image: img };
          });
          const catsEn = categoriesRes.data.map(c => {
            let img = c.image;
            if (!img || img.includes('cat-') || img === '/images/cat-all.jpg') {
              img = getCategoryFallbackImage(c.slug, c.nameEn || c.nameAr);
            }
            return { id: c._id, name: c.nameEn, image: img };
          });
          setAppCategories({
            ar: [{ id: 'all', name: 'الكل', image: '/images/yes-and-studio-XVYz_QeiEBw-unsplash.jpg' }, ...catsAr],
            en: [{ id: 'all', name: 'All', image: '/images/yes-and-studio-XVYz_QeiEBw-unsplash.jpg' }, ...catsEn]
          });
        }

        if (productsRes.success && productsRes.data) {
          const mappedProducts = productsRes.data.map(p => ({
            id: p._id,
            name: { ar: p.nameAr, en: p.nameEn },
            category: { ar: p.category?.nameAr || '', en: p.category?.nameEn || '' },
            categoryId: p.category?._id,
            price: { ar: `${p.price} ₪`, en: `${p.price} ₪` },
            description: { ar: p.descriptionAr || '', en: p.descriptionEn || '' },
            images: p.images || [],
            visible: p.isVisible
          }));
          setProducts(mappedProducts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');
  const texts = t[lang];

  const handleAdminClick = () => {
    if (isAdminAuthenticated) {
      setActivePage('admin');
      localStorage.setItem('activePage', 'admin');
    } else {
      setIsAdminAuthOpen(true);
    }
  };

  const navigateTo = (page) => {
    setActivePage(page);
    localStorage.setItem('activePage', page);
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
      className={`text-sm uppercase tracking-widest font-cairo transition-all duration-300 ${activePage === page
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
      className={`block w-full text-${lang === 'ar' ? 'right' : 'left'} font-cairo uppercase tracking-widest py-3 transition-all ${activePage === page ? 'text-navy font-bold border-l-2 border-navy pl-4' : 'text-gray-500 hover:text-navy px-4'
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


      {/* HOME PAGE */}
      {activePage === 'home' && (
        <div className="animate-fade-in">
          {/* PREMIUM HERO BANNER */}
          <section className="relative mx-4 mt-6 rounded-3xl md:mx-0 md:mt-0 md:rounded-none overflow-hidden bg-navy flex items-center justify-center shadow-2xl h-[40vh] md:h-[70vh] min-h-[300px] md:min-h-[500px]">
            {bannerData.mediaType === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                src={bannerData.mediaUrl}
              />
            ) : (
              <img
                src={bannerData.mediaUrl}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                alt="Banner"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-navy/10"></div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
              <h2 className="text-white text-3xl md:text-8xl font-bold font-cairo mb-4 md:mb-8 animate-slide-up drop-shadow-2xl">
                {bannerData.title[lang]}
              </h2>
              <div className="flex items-center justify-center gap-3 md:gap-6 animate-slide-up delay-100">
                <div className="h-[1px] md:h-[2px] w-8 md:w-12 bg-gold hidden md:block"></div>
                <p className="text-gold text-sm md:text-2xl font-cairo tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-90">
                  {bannerData.subtitle[lang]}
                </p>
                <div className="h-[1px] md:h-[2px] w-8 md:w-12 bg-gold hidden md:block"></div>
              </div>
            </div>
          </section>

          {/* HERO / ABOUT US SECTION */}
          <section className="bg-white py-12 md:py-24 border-b border-gray-100">
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

      {/* ADMIN PAGE */}
      {activePage === 'admin' && isAdminAuthenticated && (
        <AdminView
          lang={lang}
          products={products}
          setProducts={setProducts}
          appCategories={appCategories}
          setAppCategories={setAppCategories}
          bannerData={bannerData}
          setBannerData={setBannerData}
          footerData={footerData}
          setFooterData={setFooterData}
          showPricesPublicly={showPricesPublicly}
          setShowPricesPublicly={setShowPricesPublicly}
          adminTab={adminTab}
          setAdminTab={setAdminTab}
          navigateTo={navigateTo}
          setIsAdminAuthenticated={setIsAdminAuthenticated}
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
            <form onSubmit={async (e) => {
              e.preventDefault();
              try {
                const res = await fetch('/api/admin/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.password.value
                  })
                });
                const data = await res.json();
                if (data.success && data.data.token) {
                  localStorage.setItem('adminToken', data.data.token);
                  localStorage.setItem('activePage', 'admin');
                  setIsAdminAuthenticated(true);
                  setIsAdminAuthOpen(false);
                  setActivePage('admin');
                } else {
                  setAuthError(data.message || (lang === 'ar' ? 'بيانات غير صحيحة' : 'Invalid credentials'));
                }
              } catch (err) {
                setAuthError(lang === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error');
              }
            }} className="space-y-6">
              <input required name="username" type="text" placeholder={texts.username} className={`w-full p-4 border-b border-gray-300 outline-none font-cairo ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
              <input required name="password" type="password" placeholder={texts.password} className={`w-full p-4 border-b border-gray-300 outline-none font-cairo ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
              {authError && <p className="text-red-500 text-sm font-cairo text-center">{authError}</p>}
              <button type="submit" className="w-full py-4 bg-navy text-white font-cairo font-bold rounded-xl hover:bg-navy/90 transition-colors">{texts.login}</button>
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
                <li className="flex items-center gap-2"><Phone size={14} /> {footerData.phone}</li>
                <li className="flex items-center gap-2"><Mail size={14} /> {footerData.email}</li>
                <li className="flex items-center gap-2"><MapPin size={14} /> {lang === 'ar' ? footerData.addressAr : footerData.addressEn}</li>
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
            <p>{(lang === 'ar' ? footerData.copyrightAr : footerData.copyrightEn).replace('{year}', new Date().getFullYear())}</p>
          </div>
        </footer>
      )}

      {/* HIDDEN CATALOG EXPORT AREA - Styled for PDF */}
      <div 
        id="catalog-pdf-export" 
        className="p-0 bg-white w-[1200px]" 
        style={{ direction: 'ltr', position: 'fixed', top: '-9999px', left: '-9999px' }}
      >
        {/* 1. HERO BANNER REPLICA */}
        <div className="relative h-[500px] w-full overflow-hidden mb-12">
          {bannerData.mediaType === 'image' ? (
            <img src={bannerData.mediaUrl} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-navy flex items-center justify-center text-white text-4xl">FREEZE DRY</div>
          )}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-12">
            <h1 className="text-7xl font-bold font-cairo text-white mb-6 drop-shadow-2xl leading-tight">
              {bannerData.title[lang]}
            </h1>
            <p className="text-3xl font-cairo text-gold uppercase drop-shadow-lg leading-normal">
              {bannerData.subtitle[lang]}
            </p>
          </div>
        </div>

        <div className="px-24 pb-24">
          {/* 2. INTRO / ABOUT REPLICA */}
          <div className="flex flex-col items-center text-center mb-28 max-w-5xl mx-auto">
            <div className="w-48 h-48 bg-sand rounded-full flex items-center justify-center mb-10 shadow-xl border-4 border-white">
              <img src="/images/logo.png" className="w-32 h-32 object-contain" alt="Logo" />
            </div>
            <h2 className="text-5xl font-bold font-cairo text-navy mb-8 uppercase">FREEZE DRY</h2>
            <div className="w-24 h-1.5 bg-gold mb-10"></div>
            <p className={`text-2xl font-cairo text-gray-600 leading-[1.8] italic ${lang === 'ar' ? 'text-right' : 'text-center'}`}>
              {lang === 'ar'
                ? 'نحن متخصصون في الحلويات المجففة بالتجميد الفاخرة، حيث نحول الحلويات التقليدية إلى تجربة مقرمشة وفريدة من نوعها.'
                : 'We specialize in luxury freeze-dried confectionery, transforming traditional sweets into a unique, crunchy experience.'}
            </p>
          </div>

          {/* 3. CATEGORIES & PRODUCTS GRID */}
          <div className="space-y-32">
            {appCategories[lang].filter(c => c.id !== 'all').map(cat => {
              const catName = cat.name[lang] || cat.name;
              const catProducts = products.filter(p => {
                const isInCategory = (p.category[lang] === catName || p.category === catName || p.category[lang] === cat.name.en || p.category === cat.name.en);
                return isInCategory && p.visible;
              });
              if (catProducts.length === 0) return null;

              return (
                <div key={cat.id}>
                  {/* CATEGORY RECTANGLE HEADER */}
                  <div className="relative h-60 rounded-[40px] overflow-hidden mb-16 shadow-2xl">
                    <img src={cat.image} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy/50 flex items-center justify-center p-8">
                      <h2 className={`text-5xl font-bold font-cairo text-white uppercase ${lang === 'ar' ? 'text-right' : 'text-center'}`}>{catName}</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    {catProducts.map(p => (
                      <div key={p.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                        <div className="aspect-square">
                          <img src={p.images?.[0] && p.images[0].trim() !== '' ? p.images[0] : getProductFallbackImage(p)} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-lg font-bold font-cairo text-navy mb-2 line-clamp-1">{getName(p, lang)}</h3>
                          <div className="w-10 h-0.5 bg-gold mx-auto mb-3"></div>
                          <p className="text-xl text-gold font-bold font-cairo">{getPrice(p, lang)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-32 pt-16 border-t-2 border-gray-100 text-center text-gray-400 font-cairo text-sm flex flex-col items-center gap-4">
            <div className="text-navy font-bold tracking-widest text-lg">FREEZE DRY</div>
            <div>© {new Date().getFullYear()} - Luxury Confectionery Catalog</div>
            <div className="text-[10px] text-gray-300">Generated for offline viewing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
