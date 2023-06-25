import asus1 from '../assets/asusA15-1.jpg'
import asus2 from '../assets/asusA15-2.jpg'
import asus3 from '../assets/asusA15-3.jpg'
import hp1 from '../assets/HP15-1.jpg'
import hp2 from '../assets/HP15-2.jpg'
import rog1 from '../assets/ROG-1.jpg'
import rog2 from '../assets/ROG-2.jpg'

export const gallery=[
    {
        id:1,
        images:[asus1,asus2,asus3],
        model:'Asus Tuf A15',
        case : 'Prior to addressing the dust buildup on fins, the performance suffered, preventing the laptop from sustaining optimal performance over extended periods.'
    },
    {
        id:2,
        images:[hp1,hp2],
        model:'HP Pavilion 15',
        case: 'Required basic cleaning and repasting.'
    },
    {
        id:3,
        images:[rog1,rog2],
        model:'Asus ROG Zephyrus',
        case:'Heatsink clogged with dust, no contact between CPU die and heatsink was causing spikes in temperature, significantly impairing overall performance.'
    }
]