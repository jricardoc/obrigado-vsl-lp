import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaLock } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeader,
  Logo,
  ModalTitle,
  ModalBody,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  SecurityNote,
} from "./styles";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_source_platform: string;
  utm_creative_format: string;
  utm_marketing_tactic: string;
  utm_term: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_source_platform: "",
    utm_creative_format: "",
    utm_marketing_tactic: "",
    utm_term: "",
  });

  // Captura UTMs da URL
  useEffect(() => {
    if (isOpen) {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_content: params.get("utm_content") || "",
        utm_source_platform: params.get("utm_source_platform") || "",
        utm_creative_format: params.get("utm_creative_format") || "",
        utm_marketing_tactic: params.get("utm_marketing_tactic") || "",
        utm_term: params.get("utm_term") || "",
      }));

      // Carrega jQuery e aplica máscara no telefone
      const loadMask = () => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        jQueryScript.onload = () => {
          const maskScript = document.createElement("script");
          maskScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js";
          maskScript.onload = () => {
            // @ts-expect-error jQuery global
            if (window.jQuery) {
              // @ts-expect-error jQuery global
              window.jQuery("#form-field-telefone").mask("(00)00000-0000");
            }
          };
          document.head.appendChild(maskScript);
        };
        document.head.appendChild(jQueryScript);
      };

      // Só carrega se jQuery não existir
      // @ts-expect-error jQuery global
      if (!window.jQuery) {
        loadMask();
      } else {
        // @ts-expect-error jQuery global
        window.jQuery("#form-field-telefone").mask("(00)00000-0000");
      }

      // Bloqueia scroll do body
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Monta a URL de checkout com os dados do formulário
      const baseUrl = "https://pay.hotmart.com/E93665827E";
      const sck = [
        formData.utm_source,
        formData.utm_medium,
        formData.utm_campaign,
        formData.utm_content,
        formData.utm_term,
        formData.utm_source_platform,
        formData.utm_creative_format,
        formData.utm_marketing_tactic,
      ].join("-");

      const params = new URLSearchParams({
        off: "c8ghwa9n",
        checkoutMode: "10",
        email: formData.email,
        name: formData.nome,
        phonenumber: formData.telefone,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_content: formData.utm_content,
        utm_term: formData.utm_term,
        utm_source_platform: formData.utm_source_platform,
        utm_creative_format: formData.utm_creative_format,
        utm_marketing_tactic: formData.utm_marketing_tactic,
        sck: sck,
      });

      const checkoutUrl = `${baseUrl}?${params.toString()}`;
      window.location.href = checkoutUrl;
    },
    [formData],
  );

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Fecha com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent role="dialog" aria-modal="true">
        <CloseButton
          onClick={onClose}
          aria-label="Fechar formulário"
          title="Fechar"
        >
          <FaTimes />
        </CloseButton>

        <ModalHeader>
          <Logo
            src="https://www.ocaradocopytrade.com/wp-content/uploads/2025/09/copytrade2.webp"
            alt="O Cara do Copy Trade"
            width={180}
            height={50}
          />
          <ModalTitle>
            Você está quase lá! Preencha o formulário abaixo para dar o primeiro
            passo na sua jornada de <span>copytrade</span>!
          </ModalTitle>
        </ModalHeader>

        <ModalBody onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="form-field-nome">Qual seu nome?</Label>
            <Input
              type="text"
              id="form-field-nome"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="form-field-email">Seu melhor e-mail</Label>
            <Input
              type="email"
              id="form-field-email"
              name="email"
              placeholder="Insira aqui seu melhor email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="form-field-telefone">Seu Whatsapp (com DDD)</Label>
            <Input
              type="tel"
              id="form-field-telefone"
              name="telefone"
              placeholder="Insira apenas números"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {/* Campos ocultos de UTM */}
          <input type="hidden" name="utm_source" value={formData.utm_source} />
          <input type="hidden" name="utm_medium" value={formData.utm_medium} />
          <input
            type="hidden"
            name="utm_campaign"
            value={formData.utm_campaign}
          />
          <input
            type="hidden"
            name="utm_content"
            value={formData.utm_content}
          />
          <input
            type="hidden"
            name="utm_source_platform"
            value={formData.utm_source_platform}
          />
          <input
            type="hidden"
            name="utm_creative_format"
            value={formData.utm_creative_format}
          />
          <input
            type="hidden"
            name="utm_marketing_tactic"
            value={formData.utm_marketing_tactic}
          />
          <input type="hidden" name="utm_term" value={formData.utm_term} />

          <SubmitButton type="submit" id="prechekout-academia">
            Continuar Inscrição
          </SubmitButton>

          <SecurityNote>
            <FaLock />
            *Seus dados estão seguros.
          </SecurityNote>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CheckoutModal;
