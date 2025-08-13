import { MainNav } from "@/components/main-nav";
import { Facebook, Twitter, Linkedin, Quote, MapPin, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CulinaryStats } from "@/components/ui/stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="backdrop-header border-b sticky top-0 z-50 shadow-1 transition-all duration-300">
        <div className="container max-w-7xl mx-auto flex h-16 items-center px-4">
          <MainNav />
        </div>
      </header>
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/hero-culinary.svg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
          <div className="relative z-10 text-center space-y-8 px-4 max-w-5xl mx-auto fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                Nikmati Keunggulan
                <span className="block text-primary-foreground bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Kuliner
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl mx-auto prose-culinary font-light">
                Rasakan hidangan lezat yang dibuat dengan passion dan bahan-bahan terbaik dalam suasana elegan nan mewah.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="text-lg px-10 py-6 h-auto bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Jelajahi Menu Kami
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 h-auto bg-white/10 border-white/40 text-white hover:bg-white/20 hover:border-white/60 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                Buat Reservasi
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="lg:order-2 fade-in-up">
                <div className="relative group">
                  <Image
                    src="/images/about-culinary.svg"
                    alt="Tentang Kelezatan Kuliner"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="lg:order-1 space-y-8 fade-in-up">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold heading-gradient leading-tight">
                      Cerita Kami: Perjalanan Kuliner
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                  </div>
                  <p className="prose-culinary text-muted-foreground text-lg leading-relaxed">
                    Di Culinary Delights, kami percaya bahwa makanan adalah seni, simfoni rasa
                    yang menceritakan sebuah kisah. Perjalanan kami dimulai dengan passion sederhana: menciptakan
                    pengalaman makan yang tak terlupakan yang menggugah selera dan menghangatkan jiwa Anda.
                  </p>
                  <p className="prose-culinary text-muted-foreground text-lg leading-relaxed">
                    Kami dengan teliti memilih bahan-bahan segar yang bersumber lokal, menggabungkannya
                    dengan teknik kuliner inovatif dan sedikit dedikasi dari hati. Setiap hidangan adalah bukti
                    komitmen kami terhadap kualitas, tradisi, dan sentuhan modern.
                  </p>
                </div>
                <Button size="lg" variant="outline" className="mt-8 px-8 py-4 text-lg border-2 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                  Pelajari Lebih Lanjut Tentang Kami
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu/Offerings Section */}
        <section id="menu" className="section bg-gradient-to-br from-muted/40 via-muted/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(141,110,99,0.1),transparent_50%)]"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 mb-20 fade-in-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold heading-gradient leading-tight">Kelezatan Kuliner Kami</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
              <p className="prose-culinary text-muted-foreground max-w-4xl mx-auto text-lg">
                Jelajahi menu beragam kami, dibuat dengan bahan-bahan segar dan keahlian kuliner yang merayakan tradisi dan inovasi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover overflow-hidden border-0 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src="/images/appetizers.svg" 
                    alt="Hidangan Pembuka" 
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Populer
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Hidangan Pembuka</CardTitle>
                  <CardDescription className="prose-culinary text-muted-foreground">Mulai perjalanan kuliner Anda dengan hidangan pembuka yang lezat.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Bruschetta</h4>
                      <p className="text-sm text-muted-foreground">Tomat segar, kemangi, bawang putih, dan minyak zaitun di atas baguette panggang.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Calamari Fritti</h4>
                      <p className="text-sm text-muted-foreground">Calamari goreng renyah disajikan dengan saus marinara yang segar.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Jamur Isi</h4>
                      <p className="text-sm text-muted-foreground">Tutup jamur diisi dengan rempah dan keju, dipanggang hingga sempurna.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover overflow-hidden border-0 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src="/images/main-courses.svg" 
                    alt="Hidangan Utama" 
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Pilihan Chef
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Hidangan Utama</CardTitle>
                  <CardDescription className="prose-culinary text-muted-foreground">Nikmati hidangan utama signature kami.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Salmon Goreng</h4>
                      <p className="text-sm text-muted-foreground">Disajikan dengan asparagus panggang dan saus lemon-dill.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Steak Ribeye</h4>
                      <p className="text-sm text-muted-foreground">Dipanggang hingga sempurna dengan kentang tumbuk bawang putih dan sayuran musiman.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Chicken Alfredo</h4>
                      <p className="text-sm text-muted-foreground">Saus Alfredo krim dengan ayam panggang dan pasta fettuccine.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover overflow-hidden border-0 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src="/images/desserts.svg" 
                    alt="Hidangan Penutup" 
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Hidangan Manis
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Hidangan Penutup</CardTitle>
                  <CardDescription className="prose-culinary text-muted-foreground">Penutup manis untuk makanan sempurna Anda.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Tiramisu</h4>
                      <p className="text-sm text-muted-foreground">Hidangan penutup Italia klasik dengan ladyfinger yang direndam kopi dan krim mascarpone.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">Chocolate Lava Cake</h4>
                      <p className="text-sm text-muted-foreground">Kue cokelat hangat dengan pusat yang meleleh, disajikan dengan es krim vanilla.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-300">
                      <h4 className="font-semibold text-foreground">New York Cheesecake</h4>
                      <p className="text-sm text-muted-foreground">Cheesecake kaya dan lembut dengan kompot berry.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials/Reviews Section */}
        <section id="testimonials" className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-muted/30 to-transparent"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 mb-20 fade-in-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold heading-gradient leading-tight">Apa Kata Pelanggan Kami</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover border-0 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl relative group transition-all duration-500">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">Emily R.</CardTitle>
                  <CardDescription className="text-primary font-medium">Kritikus Makanan</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="prose-culinary text-muted-foreground italic leading-relaxed">
                    &ldquo;Benar-benar luar biasa! Setiap hidangan adalah mahakarya, penuh dengan rasa. Permata kuliner sejati!&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover border-0 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl relative group transition-all duration-500">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">David L.</CardTitle>
                  <CardDescription className="text-primary font-medium">Pelanggan Tetap</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="prose-culinary text-muted-foreground italic leading-relaxed">
                    &ldquo;Pengalaman makan terbaik yang pernah saya alami dalam beberapa tahun. Pelayanannya sempurna, dan makanannya luar biasa.&rdquo;
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover border-0 bg-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl relative group transition-all duration-500">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">Sarah M.</CardTitle>
                  <CardDescription className="text-primary font-medium">Event Planner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="prose-culinary text-muted-foreground italic leading-relaxed">
                    &ldquo;Culinary Delights melayani acara kami, dan itu sukses besar! Tamu kami memuji makanan. Sangat direkomendasikan!&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <CulinaryStats />

        {/* Contact Section */}
        <section id="contact" className="section bg-gradient-to-br from-muted/40 via-muted/20 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(141,110,99,0.1),transparent_50%)]"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 mb-20 fade-in-up">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold heading-gradient leading-tight">Hubungi Kami</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
              <p className="prose-culinary text-muted-foreground max-w-4xl mx-auto text-lg">
                Kami ingin mendengar dari Anda! Hubungi kami untuk reservasi, pertanyaan catering, atau pertanyaan lainnya.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl hover:bg-card/90 transition-all duration-300 group">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Kunjungi Kami</h3>
                      <p className="prose-culinary text-muted-foreground text-lg">
                        Jl. Kuliner No. 123, Kota Kuliner, KC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl hover:bg-card/90 transition-all duration-300 group">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Hubungi Kami</h3>
                      <div className="space-y-3">
                        <p className="prose-culinary text-muted-foreground text-lg">
                          <strong className="text-foreground">Telepon:</strong> (021) 456-7890
                        </p>
                        <p className="prose-culinary text-muted-foreground text-lg">
                          <strong className="text-foreground">Email:</strong> info@culinarydelights.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl hover:bg-card/90 transition-all duration-300 group">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Jam Operasional</h3>
                      <div className="space-y-2">
                        <p className="prose-culinary text-muted-foreground text-lg">
                          <strong className="text-foreground">Sen-Kam:</strong> 11:00 - 22:00
                        </p>
                        <p className="prose-culinary text-muted-foreground text-lg">
                          <strong className="text-foreground">Jum-Sab:</strong> 11:00 - 23:00
                        </p>
                        <p className="prose-culinary text-muted-foreground text-lg">
                          <strong className="text-foreground">Minggu:</strong> 12:00 - 21:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Kirim Pesan</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Nama Depan"
                          className="h-12 border-2 border-muted-foreground/20 focus:border-primary transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Nama Belakang"
                          className="h-12 border-2 border-muted-foreground/20 focus:border-primary transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Alamat Email"
                        className="h-12 border-2 border-muted-foreground/20 focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Pesan Anda"
                        className="min-h-[120px] border-2 border-muted-foreground/20 focus:border-primary transition-colors duration-300 resize-none"
                      />
                    </div>
                    <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300">
                      Kirim Pesan
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20"></div>
        <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-foreground">Culinary Delights</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Nikmati seni fine dining dengan passion kami untuk keunggulan kuliner dan rasa yang tak terlupakan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary-foreground">Tautan Cepat</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Beranda</a></li>
                <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Tentang</a></li>
                <li><a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Menu</a></li>
                <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Ulasan</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary-foreground">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Makan di Tempat</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Bawa Pulang</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Catering</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">Acara Pribadi</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary-foreground">Informasi Kontak</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Jl. Kuliner No. 123</p>
                <p>Kota Kuliner, KC 12345</p>
                <p>Telepon: (021) 456-7890</p>
                <p>Email: info@culinarydelights.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/30 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2024 Culinary Delights. Semua hak dilindungi. | Dirancang dengan ❤️ untuk pecinta kuliner
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
