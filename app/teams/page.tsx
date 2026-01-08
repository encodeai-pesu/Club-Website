import { Github, Linkedin } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

interface Member {
  name: string
  github: string
  linkedin: string
  role: string
  image?: string
}

interface Domain {
  name: string
  members: Member[]
}

export default function Teams() {
  const domains: Domain[] = [
    {
      name: "Club Heads",
      members: [
        { name: "Vinitha U S", github: "", linkedin: "", role: "Head", image: "/profile_pictures_png/Vinitha_U_S.png" },
        { name: "Akshat Tripathi", github: "https://github.com/MrAstatine", linkedin: "https://www.linkedin.com/in/akshat-tripathi-2a7932333/", role: "Head", image: "/profile_pictures_png/Akshat_Tripathi.png" }
      ]
    },
    {
      name: "AI/ML",
      members: [
        { name: "Rahul Jaikrishna", github: "https://github.com/Tensorflow-Ranger", linkedin: "https://www.linkedin.com/in/rahul-jaikrishna-64971a1a7/", role: "Head", image: "/profile_pictures_png/Rahul_Jaikrishna.png" },
        { name: "Pratham M J", github: "https://github.com/Pratham-M-J", linkedin: "https://www.linkedin.com/in/pratham-m-j-384a07298", role: "Head", image: "/profile_pictures_png/Pratham_M_J.png" },
        { name: "Manit Bohra", github: "https://github.com/Alex-Hunterz/", linkedin: "https://www.linkedin.com/in/manit-bohra/", role: "Member", image: "/profile_pictures_png/Manit_Bohra.png" },
        { name: "Pratheek J Gowda", github: "https://github.com/Pratheek22", linkedin: "https://www.linkedin.com/in/pratheek-j-gowda-899712300/", role: "Member", image: "/profile_pictures_png/Pratheek_J_Gowda.png" },
        { name: "Biswarup Dutta", github: "https://github.com/Roottoaccess", linkedin: "https://www.linkedin.com/in/biswarup-dutta-866686253/", role: "Member", image: "/profile_pictures_png/Biswarup_Dutta.png" },
        { name: "Gagan P", github: "https://github.com/Gagancreates", linkedin: "https://www.linkedin.com/in/gaganp56/", role: "Member", image: "/profile_pictures_png/Gagan_P.png" },
        { name: "Deeptanshu Kumar", github: "https://github.com/deeptanshukumar", linkedin: "https://www.linkedin.com/in/deeptanshu-kumar/", role: "Member", image: "/profile_pictures_png/Deeptanshu_Kumar.png" },
        { name: "Shloka Reddy T", github: "https://github.com/shlokareddyt", linkedin: "https://www.linkedin.com/in/shloka-reddy-5a5191329", role: "Member", image: "/profile_pictures_png/Shloka_Reddy_T.png" },
        { name: "Navya Suresh", github: "https://github.com/nav-yeah", linkedin: "https://www.linkedin.com/in/navya-suresh", role: "Member", image: "/profile_pictures_png/Navya_Suresh.png" },
        { name: "Abirami M", github: "https://github.com/mabirami0608", linkedin: "https://www.linkedin.com/in/m-abirami/", role: "Member", image: "/profile_pictures_png/Abirami_M.png" }
      ]
    },
    {
      name: "WebDev",
      members: [
        { name: "Kaveri Sharma", github: "https://github.com/kaverii11", linkedin: "https://www.linkedin.com/in/kaveri-sharma-48220926a/", role: "Head", image: "/profile_pictures_png/kaveri_sharma.png" },
        { name: "Piyush Shiv", github: "https://github.com/PiyushShiv26", linkedin: "https://www.linkedin.com/in/piyushshiv/", role: "Head", image: "/profile_pictures_png/Piyush_Shiv.png" },
        { name: "Harsh Pandya", github: "https://github.com/Seaweed-Boi", linkedin: "https://www.linkedin.com/in/harsh-pandya-pes/", role: "Member", image: "/profile_pictures_png/Harsh_Pandya.png" },
        { name: "Sai Rishi Gangarapu", github: "https://github.com/sairishigangarapu", linkedin: "https://www.linkedin.com/in/sai-rishi-gangarapu/", role: "Member", image: "/profile_pictures_png/Sai_Rishi.png" },
        { name: "Rahul P", github: "https://github.com/RahulP2007", linkedin: "https://www.linkedin.com/in/rahul-p-75ab50283", role: "Member", image: "/profile_pictures_png/Rahul_P.png" },
        { name: "Nayan Mondal", github: "https://github.com/nayanmondal4", linkedin: "https://www.linkedin.com/in/nayanmondall", role: "Member", image: "/profile_pictures_png/Nayan_Mondal.png" }
      ]
    },
    {
      name: "Competitive Programming",
      members: [
        { name: "Krupa Jadhav", github: "https://github.com/Krupa-2004-Jadhav", linkedin: "https://www.linkedin.com/in/krupa-jadhav-000193329", role: "Head", image: "/profile_pictures_png/Krupa_Jadhav.png" },
        { name: "Disha S", github: "https://github.com/dishas123", linkedin: "https://www.linkedin.com/in/disha-s-a60b70248/", role: "Member", image: "/profile_pictures_png/Disha_S.png" },
        { name: "Rachit Upadhyay", github: "https://github.com/RachitU", linkedin: "https://www.linkedin.com/in/rachit-upadhyay-31a55b320/", role: "Member", image: "/profile_pictures_png/Rachit_Upadhyay.png" },
        { name: "Nikhita Uppar", github: "https://github.com/Nick-2908", linkedin: "https://www.linkedin.com/in/nikhita-uppar-bb97b4330/", role: "Member", image: "/profile_pictures_png/Nikhita_Uppar.png" },
        { name: "Manvith Rao K", github: "https://github.com/mrk2685", linkedin: "https://www.linkedin.com/in/mrk2685", role: "Member", image: "/profile_pictures_png/Manvith_Rao_K.png" },
        { name: "Hariom Khonde", github: "https://github.com/hariomkhonde108", linkedin: "https://www.linkedin.com/in/hariom-khonde/", role: "Member", image: "/profile_pictures_png/Hariom_Khonde.png" },
        { name: "Hrushikesh K", github: "https://github.com/r4rishi7", linkedin: "https://www.linkedin.com/in/hrushikesh-k-854b60376/", role: "Member", image: "/profile_pictures_png/Hrushikesh_K.png" },
        { name: "Srinidhi Venkata Subramonyam", github: "https://github.com/srinidhi3008", linkedin: "https://www.linkedin.com/in/srinidhi-venkata-subramonyam-595b78326", role: "Member", image: "/profile_pictures_png/Srinidhi_Venkata_Subramonyam.png" }
      ]
    },
    {
      name: "Logistics",
      members: [
        { name: "Manchikanti Sharvani", github: "https://github.com/sharvanimanchikanti", linkedin: "https://www.linkedin.com/in/manchikanti-sharvani-7a3743330", role: "Head", image: "/profile_pictures_png/Manchikanti_Sharvani.png" },
        { name: "Kushal Nayak M", github: "https://github.com/kushalnayakm", linkedin: "https://www.linkedin.com/in/kushal-nayak-943436292", role: "Head", image: "/profile_pictures_png/Kushal_Nayak_M.png" },
        { name: "Kashish K S", github: "https://github.com/Kashishks00004", linkedin: "https://www.linkedin.com/in/kashish-k-s-221399179", role: "Member", image: "/profile_pictures_png/Kashish_K_S.png" },
        { name: "Neha PM", github: "https://github.com/nehavasishta240", linkedin: "https://www.linkedin.com/in/neha-pm-4715aa2b4/", role: "Member", image: "/profile_pictures_png/Neha_PM.png" },
        { name: "PAVAN D C", github: "https://github.com/pavandc-22", linkedin: "https://www.linkedin.com/in/pavan-dc-ba04b637a", role: "Member", image: "/profile_pictures_png/PAVAN_D_C.png" },
        { name: "G Pranav Ganesh", github: "https://github.com/pranavganesh1", linkedin: "https://www.linkedin.com/in/g-pranav-ganesh-69a1442b3/", role: "Member", image: "/profile_pictures_png/G_Pranav_Ganesh.png" },
        { name: "Ruchitha L", github: "https://github.com/ruchitha-ls", linkedin: "https://www.linkedin.com/in/ruchitha-l-4b809a36a/", role: "Member", image: "/profile_pictures_png/Ruchitha.L.png" },
        { name: "Svasthi S", github: "", linkedin: "https://www.linkedin.com/in/svasthi-s-4595a2384", role: "Member", image: "/profile_pictures_png/Svasthi_S.png" },
        { name: "Abhiram R", github: "https://github.com/abhiramr-CR", linkedin: "https://www.linkedin.com/in/abhiram-r-95509a24a/", role: "Member", image: "/profile_pictures_png/Abhiram_R.png" },
        { name: "Ananya Raghavendra", github: "https://github.com/mito456", linkedin: "https://www.linkedin.com/in/ananya-raghavendra", role: "Member", image: "/profile_pictures_png/Ananya_Raghavendra.png" },
        { name: "P T Mounika", github: "https://github.com/mounika-200622", linkedin: "https://www.linkedin.com/in/p-t-mounika-a74742375", role: "Member", image: "/profile_pictures_png/P_T_Mounika.png" }
      ]
    },
    {
      name: "Event Management",
      members: [
        { name: "N Riddhi Samitha", github: "https://github.com/RiddhiSamitha", linkedin: "https://www.linkedin.com/in/n-riddhi-samitha-851811304", role: "Head", image: "/profile_pictures_png/N_Riddhi_Samitha.png" },
        { name: "B A Saharsh", github: "https://github.com/Saharshba", linkedin: "https://www.linkedin.com/in/b-a-saharsh", role: "Head", image: "/profile_pictures_png/B_A_Saharsh.png" },
        { name: "Chetana Vijayakumar", github: "", linkedin: "https://www.linkedin.com/in/chetana-vijayakumar-95a2b121a", role: "Member", image: "/profile_pictures_png/Chetana_Vijayakumar.png" },
        { name: "Samriddhi Rajesh Kori", github: "https://github.com/Samriddhi-R-Kori", linkedin: "https://www.linkedin.com/in/samriddhi-rajesh-kori-383a7322b", role: "Member", image: "/profile_pictures_png/Samriddhi_Rajesh_Kori.png" },
        { name: "Shriya Mohanty", github: "https://github.com/shriya5752", linkedin: "https://www.linkedin.com/in/shriya-moh", role: "Member", image: "/profile_pictures_png/Shriya_Mohanty.png" },
        { name: "Ada Sharma", github: "", linkedin: "", role: "Member", image: "/profile_pictures_png/Ada_Sharma.png" },
        { name: "Raashi Hegde", github: "https://github.com/thioss", linkedin: "https://www.linkedin.com/in/raashi-hegde-03352238a", role: "Member", image: "/profile_pictures_png/Raashi_Hegde.png" },
        { name: "Saanvi V Sutar", github: "https://github.com/Saanvi-15", linkedin: "https://www.linkedin.com/in/saanvi-veerendra-sutar-53846438a", role: "Member", image: "/profile_pictures_png/Saanvi_V_Sutar.png" },
        { name: "Samskruthi Gowda P", github: "", linkedin: "", role: "Member", image: "/profile_pictures_png/SAMSKRUTHI_GOWDA_P.png" },
        { name: "Vibha Vasisht", github: "", linkedin: "", role: "Member", image: "/profile_pictures_png/Vibha_Vasisht.png" },
        { name: "Ayush Bastawad", github: "", linkedin: "https://www.linkedin.com/in/ayushbastawad", role: "Member", image: "/profile_pictures_png/Ayush_bastawad.png" },
        { name: "Rithu Preethi", github: "https://github.com/rithupreethi08hub", linkedin: "https://www.linkedin.com/in/rithu-preethi-02b5a6384", role: "Member", image: "/profile_pictures_png/Rithu_Preethi.png" }
      ]
    },
    {
      name: "Sponsorship & Marketing",
      members: [
        { name: "Vamsi Krishna", github: "", linkedin: "https://www.linkedin.com/in/vamsi-krishna-375875280", role: "Head", image: "/profile_pictures_png/Vamsi_Krishna.png" },
        { name: "Mrunmayi Mohite", github: "https://github.com/Mrunmayi019", linkedin: "https://www.linkedin.com/in/mrunmayi-mohite-b30b242b7/", role: "Head", image: "/profile_pictures_png/Mrunmayi_Mohite.png" },
        { name: "Bhavith Kumar Yarava", github: "https://github.com/bhavithyarava567", linkedin: "https://www.linkedin.com/in/bhavith-kumar-yarava-b33095334/", role: "Member", image: "/profile_pictures_png/Bhavith_Kumar_Yarava.png" },
        { name: "Mohammed Fahaad", github: "", linkedin: "https://www.linkedin.com/in/mohammed-fahaad-406405323", role: "Member", image: "/profile_pictures_png/Mohammed_Fahaad.png" },
        { name: "Sachchit Tadikonda", github: "https://github.com/Sachchit39", linkedin: "https://www.linkedin.com/in/sachchit-tadikonda-b0060337a", role: "Member", image: "/profile_pictures_png/Sachchit_Tadikonda.png" },
        { name: "Tanmay M Jain", github: "https://github.com/tanmay11pthjain", linkedin: "https://www.linkedin.com/in/tanmay11pthjain", role: "Member", image: "/profile_pictures_png/Tanmay_M_Jain.png" },
        { name: "Aarya Tedla", github: "https://github.com/AaryaTedla", linkedin: "https://www.linkedin.com/in/aarya-tedla-991a7a1a4", role: "Member", image: "/profile_pictures_png/Aarya_Tedla.png" },
        { name: "Advita Sai", github: "https://github.com/advitasai", linkedin: "https://www.linkedin.com/in/advita-gade-544188373", role: "Member", image: "/profile_pictures_png/Advita_Sai.png" },
        { name: "Dhruv Talavat", github: "", linkedin: "https://www.linkedin.com/in/dhruvtalavat", role: "Member", image: "/profile_pictures_png/DHRUV_TALAVAT.png" },
        { name: "Sunay Hegde", github: "https://github.com/SunayHegde", linkedin: "https://www.linkedin.com/in/sunay-hegde-81055b365", role: "Member", image: "/profile_pictures_png/Sunay_Hegde.png" }
      ]
    },
    {
      name: "Design",
      members: [
        { name: "Sidda Baasanthi Reddy", github: "https://github.com/BaasanthiReddyS", linkedin: "https://www.linkedin.com/in/sidda-baasanthi-reddy", role: "Head", image: "/profile_pictures_png/Sidda_Baasanthi_Reddy.png" },
        { name: "Sai Charan B K", github: "https://github.com/Cherry-2006", linkedin: "https://www.linkedin.com/in/sai-charan-b-k-4698bb271/", role: "Member", image: "/profile_pictures_png/Sai_Charan_B_K.png" },
        { name: "Shraavani Balaji", github: "https://github.com/shraaavanibalaji", linkedin: "https://www.linkedin.com/in/shraavani-balaji-67647838a", role: "Member", image: "/profile_pictures_png/Shraavani_Balaji.png" },
        { name: "Rohini Vishu", github: "https://github.com/RohiniVishu", linkedin: "https://www.linkedin.com/in/RohiniVishu", role: "Member", image: "/profile_pictures_png/Rohini_Vishu.png" },
        { name: "Abheetha Mallya", github: "https://github.com/abheetha16", linkedin: "https://www.linkedin.com/in/abheetha-mallya-a5858538a", role: "Member", image: "/profile_pictures_png/Abheetha_Mallya.png" },
        { name: "Narasappagari Himavarshini", github: "https://github.com/HimavarshiniReddy", linkedin: "https://www.linkedin.com/in/n-himavarshini-b509a1356", role: "Member" }
      ]
    },
    {
      name: "Public Relations",
      members: [
        { name: "Lakshanyaa Shree", github: "", linkedin: "https://www.linkedin.com/in/lakshanyaashree", role: "Head", image: "/profile_pictures_png/Lakshanyaa_Shree.png" },
        { name: "Vishal H", github: "https://github.com/vishalh06", linkedin: "https://www.linkedin.com/in/vishal-h-0a5a222aa/", role: "Head", image: "/profile_pictures_png/Vishal_H.png" },
        { name: "Aditi Hubli", github: "https://github.com/money2177", linkedin: "https://www.linkedin.com/in/aditi-hubli-8886bb375", role: "Member", image: "/profile_pictures_png/Aditi_Hubli.png" },
        { name: "Saanvi", github: "https://github.com/ivnaas28", linkedin: "https://www.linkedin.com/in/saanvi-m-399051367/", role: "Member", image: "/profile_pictures_png/Saanvi.png" },
        { name: "Nihaal Jadav", github: "", linkedin: "", role: "Member", image: "/profile_pictures_png/Nihaal_Jadav.png" },
        { name: "Harshita Goyal", github: "", linkedin: "", role: "Member", image: "/profile_pictures_png/Harshita_Goyal.png" },
        { name: "Dhanya Vishwanath", github: "https://github.com/dhanyamx7-blip", linkedin: "https://www.linkedin.com/in/dhanya-vishwanath-39979238aw", role: "Member", image: "/profile_pictures_png/Dhanya_vishwanath.png" }
      ]
    },
    {
      name: "Operations",
      members: [
        { name: "Hannah Shebin", github: "https://github.com/Han-Nah03", linkedin: "https://www.linkedin.com/in/-hannahshebin-", role: "Head", image: "/profile_pictures_png/Hannah_Shebin.png" },
        { name: "Nidhi Sanjay", github: "https://github.com/nidhipsanjay", linkedin: "https://www.linkedin.com/in/nidhi-sanjay-93a18b2b4", role: "Head", image: "/profile_pictures_png/Nidhi_Sanjay.png" },
        { name: "Raj Deepak Ladha", github: "https://github.com/rajladha11", linkedin: "https://www.linkedin.com/in/raj-ladha-8a18a0352", role: "Member", image: "/profile_pictures_png/Raj_Deepak_Ladha.png" },
        { name: "Aarush Anil Hegde", github: "", linkedin: "https://www.linkedin.com/in/aarush-hegde-511a58365", role: "Member", image: "/profile_pictures_png/Aarush_Anil_Hegde.png" },
        { name: "Keertana BS", github: "https://github.com/keertana-sane", linkedin: "https://www.linkedin.com/in/keertana-bs-414375324", role: "Member", image: "/profile_pictures_png/Keertana_BS.png" },
        { name: "Greeshma G", github: "https://github.com/Greeshma263", linkedin: "https://www.linkedin.com/in/greeshmag26", role: "Member", image: "/profile_pictures_png/Greeshma_G.png" }
      ]
    },
    {
      name: "Hospitality",
      members: [
        { name: "Padarthi Neha Sai", github: "https://github.com/pnehasai", linkedin: "https://www.linkedin.com/in/neha-sai-padarthi-5732ab306/", role: "Head", image: "/profile_pictures_png/Padarthi_Neha_Sai.png" },
        { name: "Shashank D", github: "https://github.com/shashankd06", linkedin: "https://www.linkedin.com/in/shashank-devaraju-164a51258", role: "Head", image: "/profile_pictures_png/Shashank_D.png" },
        { name: "Ritu Ravish", github: "https://github.com/Ritu0713", linkedin: "https://www.linkedin.com/in/ritu-ravish-184732374/", role: "Member", image: "/profile_pictures_png/Ritu_Ravish.png" },
        { name: "Aryaman D K", github: "https://github.com/aryamandk07", linkedin: "https://www.linkedin.com/in/aryaman-dk-37a6a9327", role: "Member", image: "/profile_pictures_png/Aryaman_D_K.png" },
        { name: "Navya Mohithe", github: "https://github.com/navyamohithe", linkedin: "https://www.linkedin.com/in/navya-mohithe-a811a9343", role: "Member", image: "/profile_pictures_png/Navya_Mohithe.png" },
        { name: "Rashi Joshi", github: "https://github.com/rashijoshi25", linkedin: "https://www.linkedin.com/in/rashi-joshi-2086a636b", role: "Member", image: "/profile_pictures_png/Rashi_Joshi.png" },
        { name: "Charanesh S", github: "https://github.com/charancr72005", linkedin: "https://www.linkedin.com/in/charanesh-saravanan-8b9528365", role: "Member", image: "/profile_pictures_png/Charanesh_S.png" }
      ]
    }
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="min-h-screen bg-black">
          {/* Header */}
          <section className="border-b-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight text-white lg:text-6xl">Our Team</h1>
              <p className="max-w-2xl text-lg font-mono leading-relaxed text-white">
                Meet the talented individuals driving innovation at encode ai
              </p>
            </div>
          </section>

          {/* Domains */}
          {domains.map((domain, idx) => (
            <section key={domain.name} className={idx % 2 === 0 ? "border-t-4 border-white" : "border-t-4 border-white bg-zinc-950"}>
              <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight text-white">{domain.name}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {domain.members.map((member) => (
                    <div key={member.name} className="flex gap-4 rounded-none border-2 border-white bg-black p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                      <div className="h-24 w-24 shrink-0 rounded-none border-2 border-white bg-[rgb(255,102,0)] overflow-hidden">
                        {member.image && (
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="mb-1 font-mono text-sm font-bold text-white">{member.name}</h3>
                          {member.role === "Head" && (
                            <p className="mb-2 font-mono text-xs font-bold uppercase text-[rgb(255,102,0)]">Head</p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(255,102,0)]">
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[rgb(255,102,0)]">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Footer */}
          <footer className="border-t-4 border-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Encode AI" className="h-8 w-8 rounded-none border-2 border-white" />
                  <span className="text-xl font-bold uppercase tracking-tight text-white">Encode.AI</span>
                </div>
                <p className="text-sm font-mono text-white">© 2025 Encode.AI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
