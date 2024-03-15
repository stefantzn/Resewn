from PIL import Image
from clip_interrogator import Config, Interrogator
image_path = "./BlueShirt.jpg"
image = Image.open(image_path).convert('RGB')
image = image.resize((512, 512))
ci = Interrogator(Config(clip_model_name="ViT-L-14/openai"))
print(ci.interrogate(image))
