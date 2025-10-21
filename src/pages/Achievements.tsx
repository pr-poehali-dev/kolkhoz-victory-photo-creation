import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const awards = [
    {
      year: '2024',
      title: 'Лучшее хозяйство региона',
      description: 'Признание от Министерства сельского хозяйства за высокие показатели производства',
      icon: 'Trophy'
    },
    {
      year: '2023',
      title: 'Экологический сертификат',
      description: 'Международная сертификация органического производства',
      icon: 'Award'
    },
    {
      year: '2022',
      title: 'Инновации в АПК',
      description: 'Награда за внедрение цифровых технологий в сельском хозяйстве',
      icon: 'Lightbulb'
    },
    {
      year: '2021',
      title: 'Качество продукции',
      description: 'Золотая медаль на всероссийской выставке "Золотая осень"',
      icon: 'Medal'
    }
  ];

  const achievements = [
    {
      title: 'Урожайность',
      value: '+45%',
      description: 'Рост урожайности за последние 5 лет',
      icon: 'TrendingUp',
      color: 'text-green-600'
    },
    {
      title: 'Производство',
      value: '50 000т',
      description: 'Зерновых культур в год',
      icon: 'Package',
      color: 'text-orange-600'
    },
    {
      title: 'Экспорт',
      value: '15%',
      description: 'Продукции идет на экспорт',
      icon: 'Globe',
      color: 'text-blue-600'
    },
    {
      title: 'Рабочие места',
      value: '250+',
      description: 'Созданных постоянных рабочих мест',
      icon: 'Users',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
              Наши достижения
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Результаты труда и признание на региональном и федеральном уровне
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Ключевые показатели
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {achievements.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${item.color}`}>
                      <Icon name={item.icon as any} size={24} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-heading font-bold mb-2">{item.value}</div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Награды и признание
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {awards.map((award, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={award.icon as any} className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-primary mb-1">{award.year}</div>
                        <CardTitle className="text-xl">{award.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Социальная ответственность
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Icon name="GraduationCap" className="text-primary mb-2" size={32} />
                    <CardTitle>Образование</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Программы повышения квалификации и стажировки для молодых специалистов
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Icon name="Heart" className="text-primary mb-2" size={32} />
                    <CardTitle>Благотворительность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Поддержка местных школ, больниц и социальных программ
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Icon name="TreePine" className="text-primary mb-2" size={32} />
                    <CardTitle>Экология</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Программы по восстановлению лесов и охране природных ресурсов
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievements;
