import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    title: "Навесы",
    icon: "Home",
    prices: [
      { label: "Работа (монтаж)", price: "от 2 500 ₽/м²" },
      { label: "С материалом", price: "от 5 000 ₽/м.п." }
    ],
    image: "https://cdn.poehali.dev/projects/e268a293-81d6-45da-b2a7-c62cb3de6fbc/files/6f827a0e-1111-4028-a61b-80cd82c43daa.jpg"
  },
  {
    id: 2,
    title: "Заборы",
    icon: "Grid3x3",
    prices: [
      { label: "Работа (монтаж)", price: "от 2 000 ₽/м.п." },
      { label: "С материалом", price: "индивидуальный расчет" }
    ],
    image: "https://cdn.poehali.dev/projects/e268a293-81d6-45da-b2a7-c62cb3de6fbc/files/129603c9-6f10-42df-a796-b283a8611583.jpg"
  },
  {
    id: 3,
    title: "Мангальные зоны",
    icon: "Flame",
    prices: [
      { label: "Под ключ", price: "от 150 000 ₽" }
    ]
  },
  {
    id: 4,
    title: "Садовая мебель",
    icon: "Armchair",
    prices: [
      { label: "Лавочки", price: "от 20 000 ₽" },
      { label: "Столы", price: "от 20 000 ₽" },
      { label: "Комплект (стол + лавочки)", price: "от 50 000 ₽" }
    ]
  },
  {
    id: 5,
    title: "Мангалы",
    icon: "Flame",
    prices: [
      { label: "Изделие", price: "от 15 000 ₽" }
    ]
  },
  {
    id: 6,
    title: "Перила",
    icon: "Workflow",
    prices: [
      { label: "За метр погонный", price: "от 7 000 ₽/м.п." }
    ]
  },
  {
    id: 7,
    title: "Дровницы",
    icon: "Package",
    prices: [
      { label: "Изделие", price: "от 22 000 ₽" }
    ]
  },
  {
    id: 8,
    title: "Чаны (купели)",
    icon: "Circle",
    prices: [
      { label: "Изделие", price: "от 85 000 ₽" },
      { label: "Лестница (6-местный)", price: "+ 15 000 ₽" },
      { label: "Лестница (9-местный)", price: "+ 15 000–20 000 ₽" }
    ]
  },
  {
    id: 9,
    title: "Ворота",
    icon: "DoorOpen",
    prices: [
      { label: "Консольные (ворота + калитка)", price: "от 90 000 ₽" },
      { label: "Распашные", price: "от 50 000 ₽" }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/e268a293-81d6-45da-b2a7-c62cb3de6fbc/files/344da35c-6643-41be-8689-78d4093d5e29.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider">
            Металлоконструкции<br />& Сварочные работы
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Профессиональное изготовление и монтаж металлических конструкций любой сложности
          </p>
          <Button size="lg" className="text-lg px-8 py-6 uppercase tracking-wide">
            Получить расчет
          </Button>
        </div>
      </div>

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 border border-border">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Опыт 15+ лет</h3>
              <p className="text-muted-foreground">Проверенное качество работ</p>
            </div>
            <div className="text-center p-8 border border-border">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">На все виды работ</p>
            </div>
            <div className="text-center p-8 border border-border">
              <Icon name="Zap" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Быстрые сроки</h3>
              <p className="text-muted-foreground">Соблюдение договоренностей</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase tracking-wider">
            Наши услуги и цены
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden bg-card border-border hover:border-primary transition-colors">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                    <h3 className="text-2xl font-bold uppercase">{service.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {service.prices.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-baseline border-b border-border pb-2">
                        <span className="text-sm text-muted-foreground">{price.label}</span>
                        <span className="font-bold text-lg text-primary">{price.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для расчета стоимости и обсуждения деталей вашего заказа
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 uppercase tracking-wide">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 uppercase tracking-wide">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Металлоконструкции & Сварочные работы. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
