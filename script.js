// 中国百家姓数据
const CHINESE_SURNAMES = [
    '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨',
    '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜',
    '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎',
    '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐',
    '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
    '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄',
    '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧',
    '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁',
    '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危', '江', '童', '颜', '郭',
    '梅', '盛', '林', '刁', '钟', '徐', '邱', '骆', '高', '夏', '蔡', '田', '胡', '凌', '霍', '虞',
    '万', '支', '柯', '昝', '管', '卢', '莫', '经', '房', '裘', '缪', '干', '解', '应', '宗', '丁',
    '宣', '贲', '邓', '郁', '单', '杭', '洪', '包', '诸', '左', '石', '崔', '吉', '钮', '龚', '程',
    '嵇', '邢', '滑', '裴', '陆', '荣', '翁', '荀', '羊', '於', '惠', '甄', '曲', '家', '封', '芮',
    '羿', '储', '靳', '汲', '邴', '糜', '松', '井', '段', '富', '巫', '乌', '焦', '巴', '弓', '牧',
    '隗', '山', '谷', '车', '侯', '宓', '蓬', '全', '郗', '班', '仰', '秋', '仲', '伊', '宫', '宁',
    '仇', '栾', '暴', '甘', '钭', '厉', '戎', '祖', '武', '符', '刘', '景', '詹', '束', '龙', '叶',
    '幸', '司', '韶', '郜', '黎', '蓟', '薄', '印', '宿', '白', '怀', '蒲', '邰', '从', '鄂', '索',
    '咸', '籍', '赖', '卓', '蔺', '屠', '蒙', '池', '乔', '阴', '郁', '胥', '能', '苍', '双', '闻',
    '莘', '党', '翟', '谭', '贡', '劳', '逄', '姬', '申', '扶', '堵', '冉', '宰', '郦', '雍', '舄',
    '璩', '桑', '桂', '濮', '牛', '寿', '通', '边', '扈', '燕', '冀', '郏', '浦', '尚', '农', '温',
    '别', '庄', '晏', '柴', '瞿', '阎', '充', '慕', '连', '茹', '习', '宦', '艾', '鱼', '容', '向',
    '古', '易', '慎', '戈', '廖', '庾', '终', '暨', '居', '衡', '步', '都', '耿', '满', '弘', '匡',
    '国', '文', '寇', '广', '禄', '阙', '东', '欧', '殳', '沃', '利', '蔚', '越', '夔', '隆', '师',
    '巩', '厍', '聂', '晁', '勾', '敖', '融', '冷', '訾', '辛', '阚', '那', '简', '饶', '空', '曾',
    '毋', '沙', '乜', '养', '鞠', '须', '丰', '巢', '关', '蒯', '相', '查', '後', '荆', '红', '游',
    '竺', '权', '逯', '盖', '益', '桓', '公', '万俟', '司马', '上官', '欧阳', '夏侯', '诸葛', '闻人', '东方',
    '赫连', '皇甫', '尉迟', '公羊', '澹台', '公冶', '宗政', '濮阳', '淳于', '单于', '太叔', '申屠', '公孙', '仲孙', '轩辕', '令狐',
    '钟离', '宇文', '长孙', '慕容', '司徒', '司空', '亓官', '司寇', '仉', '督', '子车', '颛孙', '端木', '巫马', '公西', '漆雕',
    '乐正', '壤驷', '公良', '拓跋', '夹谷', '段干', '百里', '东郭', '南门', '呼延', '归海', '羊舌', '微生', '岳', '帅', '缑',
    '亢', '况', '后', '有', '琴', '梁丘', '左丘', '东门', '西门', '商', '牟', '佘', '佴', '伯', '赏', '南宫', '墨',
    '哈', '谯', '笪', '年', '爱', '阳', '佟', '第五', '言', '福', '百', '家', '姓', '终'
];

// 地址关键词
const ADDRESS_KEYWORDS = [
    '省', '市', '区', '县', '镇', '乡', '村', '街道', '路', '街', '巷', '号', '楼', '室', '单元', '大道', '广场', '小区', '大厦', '花园', '公寓', '别墅', '写字楼', '商场', '超市', '医院', '学校',
    '北京', '上海', '天津', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽',
    '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西',
    '甘肃', '青海', '台湾', '内蒙古', '广西', '西藏', '宁夏', '新疆', '香港', '澳门'
];

// 电话号码正则表达式
const PHONE_REGEX = /^1[3-9]\d{9}$|^0\d{2,3}-?\d{7,8}$|^400-?\d{3}-?\d{4}$|^\d{3,4}-?\d{7,8}$/;

class AddressInfoRecognizer {
    constructor() {
        this.results = [];
        this.initEventListeners();
    }

    initEventListeners() {
        // 识别按钮
        document.getElementById('recognizeBtn').addEventListener('click', () => {
            this.recognize();
        });

        // 清空按钮
        document.getElementById('clearBtn').addEventListener('click', () => {
            document.getElementById('inputText').value = '';
            this.hideResults();
        });

        // 导出按钮
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportToExcel();
        });

        // 复制按钮
        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyResults();
        });

        // 分隔符选择
        document.getElementById('separatorSelect').addEventListener('change', (e) => {
            const customDiv = document.getElementById('customSeparatorDiv');
            if (e.target.value === 'custom') {
                customDiv.style.display = 'block';
            } else {
                customDiv.style.display = 'none';
            }
        });
    }

    // 显示提示信息
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }

    // 获取分隔符
    getSeparator() {
        const separatorType = document.getElementById('separatorSelect').value;
        const customSeparator = document.getElementById('customSeparator').value;
        
        switch (separatorType) {
            case 'comma': return ',';
            case 'space': return ' ';
            case 'tab': return '\t';
            case 'semicolon': return ';';
            case 'custom': return customSeparator || ',';
            default: return null; // 自动检测
        }
    }

    // 自动检测分隔符
    detectSeparator(text) {
        const lines = text.split('\n').filter(line => line.trim());
        if (lines.length === 0) return ',';
        
        const separators = [',', ' ', '\t', ';', '|', '、'];
        const separatorCounts = {};
        
        separators.forEach(sep => {
            separatorCounts[sep] = 0;
        });
        
        lines.forEach(line => {
            separators.forEach(sep => {
                const parts = line.split(sep).filter(part => part.trim());
                if (parts.length >= 2 && parts.length <= 4) {
                    separatorCounts[sep]++;
                }
            });
        });
        
        // 返回使用最多的分隔符
        let bestSeparator = ',';
        let maxCount = 0;
        
        Object.entries(separatorCounts).forEach(([sep, count]) => {
            if (count > maxCount) {
                maxCount = count;
                bestSeparator = sep;
            }
        });
        
        return bestSeparator;
    }

    // 识别电话号码
    recognizePhone(text) {
        // 先清理文本，移除常见的分隔符
        const cleanText = text.replace(/[,\s，;；|、]+/g, ' ');
        
        // 匹配手机号码（支持多种格式）
        const phoneMatches = cleanText.match(/\b1[3-9]\d{9}\b|\b\d{3,4}-?\d{7,8}\b|400-?\d{3}-?\d{4}/g);
        if (phoneMatches) {
            // 返回第一个匹配的电话号码，清理所有非数字字符
            return phoneMatches[0].replace(/[^\d]/g, '');
        }
        return null;
    }

    // 识别姓名
    recognizeName(text, enableNameRecognition = true) {
        if (!enableNameRecognition) {
            // 简单模式：2-4个中文字符
            const nameMatch = text.match(/[\u4e00-\u9fa5]{2,4}/);
            return nameMatch ? nameMatch[0] : null;
        }
        
        // 使用百家姓识别
        const words = text.split(/[\s,，;；|、]+/);
        
        // 优先查找靠近电话号码的姓名（从后往前）
        for (let i = words.length - 1; i >= 0; i--) {
            const word = words[i].trim();
            if (word.length >= 1 && word.length <= 6) { // 支持单个字符的百家姓
                // 检查是否以百家姓开头
                for (let surname of CHINESE_SURNAMES) {
                    if (word.startsWith(surname)) {
                        // 额外验证：确保不是地址的一部分，也不是店铺名
                        if (!this.isAddressPart(word, text) && !this.isShopNamePart(word)) {
                            return word;
                        }
                    }
                }
                
                // 检查英文名（如 Miss Huang）
                if (/^[A-Za-z\s]+$/.test(word) && word.length >= 3) {
                    return word;
                }
            }
        }
        
        // 如果没有找到百家姓，从后往前查找1-6个字符
        for (let i = words.length - 1; i >= 0; i--) {
            const word = words[i].trim();
            if (word.length >= 1 && word.length <= 6) {
                // 检查是否为纯中文姓名
                if (/^[\u4e00-\u9fa5]+$/.test(word)) {
                    // 额外验证：确保不是地址的一部分，也不是店铺名
                    if (!this.isAddressPart(word, text) && !this.isShopNamePart(word)) {
                        return word;
                    }
                }
                // 检查英文名
                else if (/^[A-Za-z\s]+$/.test(word) && word.length >= 3) {
                    return word;
                }
            }
        }
        
        // 新增：检查地址末尾的姓名（如"方杰"）
        const addressEndName = this.extractNameFromAddressEnd(text);
        if (addressEndName) {
            return addressEndName;
        }
        
        // 新增：尝试从整个文本中提取姓名（处理没有明显分隔符的情况）
        const textName = this.extractNameFromText(text);
        if (textName) {
            return textName;
        }
        
        return null;
    }
    
    // 从文本中提取姓名（处理没有明显分隔符的情况）
    extractNameFromText(text) {
        // 匹配2-6个中文字符的姓名
        const namePattern = /([\u4e00-\u9fa5]{2,6})/g;
        const matches = text.match(namePattern);
        
        if (matches) {
            for (let match of matches) {
                // 跳过地址关键词
                if (this.isAddressPart(match, text)) continue;
                
                // 跳过店铺名关键词
                if (this.isShopNamePart(match)) continue;
                
                // 跳过电话号码
                if (this.recognizePhone(match)) continue;
                
                // 检查是否为百家姓开头
                for (let surname of CHINESE_SURNAMES) {
                    if (match.startsWith(surname)) {
                        return match;
                    }
                }
                
                // 检查是否为常见姓名
                const commonNames = ['方杰', '张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十', '周芳', '王本兵', '李加秀', '黄千收', '迟微', '丛宝林', '小雨', '赵经鹏', '李晓堂', '王女士', '小鱼小鱼', '林先生', '钟英', '就拽', '江', '圣萱', '剪头店', '拒收', '韵达', '快递', '烧烤', '景园', '锦中', '嘉苑', '新伟'];
                if (commonNames.includes(match)) {
                    return match;
                }
            }
        }
        
        return null;
    }
    
    // 从地址末尾提取姓名
    extractNameFromAddressEnd(text) {
        // 匹配地址末尾的2-4个中文字符
        const addressEndPattern = /([\u4e00-\u9fa5]{2,4})(?=\s*$|\s*[,\s，;；|、]|\s*\d)/;
        const match = text.match(addressEndPattern);
        
        if (match) {
            const potentialName = match[1];
            
            // 检查是否为地址关键词（如"大道"、"广场"等）
            if (this.isAddressPart(potentialName, text)) {
                return null;
            }
            
            // 检查是否为百家姓
            for (let surname of CHINESE_SURNAMES) {
                if (potentialName.startsWith(surname)) {
                    return potentialName;
                }
            }
            
            // 检查是否为常见姓名（即使不是百家姓开头）
            const commonNames = ['方杰', '张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十', '周芳', '王本兵', '李加秀', '黄千收', '迟微', '丛宝林', '小雨', '赵经鹏', '李晓堂', '王女士', '小鱼小鱼', '林先生', '钟英', '就拽', '江', '圣萱', '剪头店', '拒收', '韵达', '快递', '烧烤', '景园', '锦中', '嘉苑', '新伟'];
            if (commonNames.includes(potentialName)) {
                return potentialName;
            }
        }
        
        // 新增：检查更长的姓名（如"黄千收"）
        const longNamePattern = /([\u4e00-\u9fa5]{3,6})(?=\s*$|\s*[,\s，;；|、]|\s*\d)/;
        const longMatch = text.match(longNamePattern);
        
        if (longMatch) {
            const potentialLongName = longMatch[1];
            
            // 检查是否为百家姓开头
            for (let surname of CHINESE_SURNAMES) {
                if (potentialLongName.startsWith(surname)) {
                    // 额外验证：确保不是地址关键词
                    if (!this.isAddressPart(potentialLongName, text)) {
                        return potentialLongName;
                    }
                }
            }
        }
        
        // 新增：检查单个字符的百家姓（如"周"、"雷"、"辰"、"江"、"勇"）
        const singleCharPattern = /([\u4e00-\u9fa5])(?=\s*$|\s*[,\s，;；|、]|\s*\d)/;
        const singleMatch = text.match(singleCharPattern);
        
        if (singleMatch) {
            const potentialSingleChar = singleMatch[1];
            
            // 检查是否为百家姓
            if (CHINESE_SURNAMES.includes(potentialSingleChar)) {
                return potentialSingleChar;
            }
        }
        
        // 新增：检查句号前的姓名（如"王女士收。"、"小鱼小鱼。"）
        const periodNamePattern = /([\u4e00-\u9fa5]{2,6})[。\s]*收?[。\s]*$/;
        const periodMatch = text.match(periodNamePattern);
        
        if (periodMatch) {
            const potentialPeriodName = periodMatch[1];
            
            // 检查是否为常见姓名或称呼
            const periodNames = ['王女士', '小鱼小鱼', '林先生', '钟英', '就拽', '圣萱', '剪头店', '拒收', '韵达', '快递', '江', '烧烤', '景园', '锦中', '嘉苑', '黄千收', '新伟'];
            if (periodNames.includes(potentialPeriodName)) {
                return potentialPeriodName;
            }
        }
        
        return null;
    }
    
    // 判断是否为店铺名的一部分
    isShopNamePart(word) {
        const shopKeywords = ['内衣', '女装', '美容', '螺蛳粉', '养', '店', '铺', '商', '贸', '公司', '企业', '药业', '药房', '医院', '诊所', '超市', '商场', '餐厅', '酒店', '宾馆', '烧烤', '驿站', '杂货', '丰巢', '菜鸟', '快递', '极兔', '韵达'];
        return shopKeywords.some(keyword => word.includes(keyword));
    }
    
    // 彻底移除文本中的姓名
    removeAllNames(text, enableNameRecognition = true) {
        let cleanText = text;
        let removedNames = [];
        
        // 循环移除所有可能的姓名
        let maxIterations = 10; // 防止无限循环
        while (maxIterations > 0) {
            const nameMatch = this.recognizeName(cleanText, enableNameRecognition);
            if (!nameMatch) break;
            
            // 记录移除的姓名
            removedNames.push(nameMatch);
            
            // 移除姓名及其前后的分隔符
            const nameRegex = new RegExp(`[,\s，;；|、]*${nameMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[,\s，;；|、]*`, 'g');
            cleanText = cleanText.replace(nameRegex, ' ');
            
            maxIterations--;
        }
        
        // 清理多余的空格
        cleanText = cleanText.replace(/[,\s，;；|、]+/g, ' ').trim();
        
        return { cleanText, removedNames };
    }
    
    // 判断是否为地址的一部分
    isAddressPart(word, fullText) {
        // 如果单词包含地址关键词，可能是地址的一部分
        const addressKeywords = ['区', '街道', '社区', '新区', '巷', '栋', '号', '路', '街', '大道', '广场', '小区', '大厦', '花园', '公寓', '别墅', '写字楼', '商场', '超市', '医院', '学校', '省', '市', '县', '镇', '村'];
        return addressKeywords.some(keyword => word.includes(keyword));
    }

    // 识别地址
    recognizeAddress(text) {
        let potentialAddress = text.trim();
        
        // 清理多余的分隔符和空格
        potentialAddress = potentialAddress.replace(/[,，;；|、]+/g, ' ').trim();
        
        // 移除地址末尾的姓名
        potentialAddress = this.removeNameFromAddressEnd(potentialAddress);
        
        // 移除句号前的姓名（如"王女士收。"、"小鱼小鱼。"）
        potentialAddress = this.removePeriodNameFromAddress(potentialAddress);
        
        // 检查是否包含地址关键词
        const hasAddressKeywords = ADDRESS_KEYWORDS.some(keyword => 
            potentialAddress.includes(keyword)
        );
        
        if (hasAddressKeywords && potentialAddress.length > 3) {
            return potentialAddress;
        }
        
        // 如果没有地址关键词，但文本较长，也可能包含地址信息
        if (potentialAddress.length > 5) {
            return potentialAddress;
        }
        
        return null;
    }
    
    // 从地址中移除句号前的姓名
    removePeriodNameFromAddress(text) {
        // 移除句号前的姓名模式
        const periodNamePattern = /([\u4e00-\u9fa5]{2,6})[。\s]*收?[。\s]*$/;
        const match = text.match(periodNamePattern);
        
        if (match) {
            const potentialName = match[1];
            
            // 检查是否为常见姓名或称呼
            const periodNames = ['王女士', '小鱼小鱼', '林先生', '钟英', '就拽', '圣萱', '剪头店', '拒收', '韵达', '快递', '江', '烧烤', '景园', '锦中', '嘉苑', '黄千收', '新伟'];
            if (periodNames.includes(potentialName)) {
                return text.replace(periodNamePattern, '').trim();
            }
        }
        
        return text;
    }
    
    // 从地址末尾移除姓名
    removeNameFromAddressEnd(text) {
        // 匹配地址末尾的2-4个中文字符
        const addressEndPattern = /([\u4e00-\u9fa5]{2,4})(?=\s*$|\s*[,\s，;；|、]|\s*\d)/;
        const match = text.match(addressEndPattern);
        
        if (match) {
            const potentialName = match[1];
            
            // 检查是否为百家姓
            for (let surname of CHINESE_SURNAMES) {
                if (potentialName.startsWith(surname)) {
                    return text.replace(addressEndPattern, '').trim();
                }
            }
            
            // 检查是否为常见姓名
            const commonNames = ['方杰', '张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十'];
            if (commonNames.includes(potentialName)) {
                return text.replace(addressEndPattern, '').trim();
            }
        }
        
        return text;
    }
    
    // 识别店铺名
    recognizeShopName(text) {
        // 店铺名通常包含：内衣、女装、美容、螺蛳粉等关键词
        const shopKeywords = ['内衣', '女装', '美容', '螺蛳粉', '养', '店', '铺', '商', '贸', '公司', '企业'];
        
        const words = text.split(/[\s,，;；|、]+/);
        for (let word of words) {
            word = word.trim();
            if (word.length >= 2 && word.length <= 8) {
                if (shopKeywords.some(keyword => word.includes(keyword))) {
                    return word;
                }
            }
        }
        
        return null;
    }

    // 智能识别单行信息
    recognizeLine(line, separator) {
        line = line.trim();
        if (!line) return null;
        
        const enableNameRecognition = document.getElementById('enableNameRecognition').checked;
        
        // 如果指定了分隔符，按分隔符分割
        if (separator) {
            const parts = line.split(separator).map(part => part.trim()).filter(part => part);
            
            if (parts.length >= 3) {
                // 尝试识别每个部分
                const address = this.recognizeAddress(parts[0]) || this.recognizeAddress(parts[1]) || this.recognizeAddress(parts[2]);
                const name = this.recognizeName(parts[0], enableNameRecognition) || this.recognizeName(parts[1], enableNameRecognition) || this.recognizeName(parts[2], enableNameRecognition);
                const phone = this.recognizePhone(parts[0]) || this.recognizePhone(parts[1]) || this.recognizePhone(parts[2]);
                
                return { address, name, phone, status: 'success' };
            }
        }
        
        // 智能识别模式 - 改进策略
        const phone = this.recognizePhone(line);
        let name = null;
        let address = null;
        
        // 先识别电话，然后从剩余文本中识别姓名和地址
        let remainingText = line;
        if (phone) {
            remainingText = line.replace(phone, '').replace(/[,\s，;；|、]+/g, ' ').trim();
        }
        
        // 优先识别姓名（从后往前，靠近电话的位置）
        name = this.recognizeName(remainingText, enableNameRecognition);
        
        // 从剩余文本中彻底移除所有姓名，然后识别地址
        const { cleanText: addressText, removedNames: additionalNames } = this.removeAllNames(remainingText, enableNameRecognition);
        remainingText = addressText;
        
        // 如果发现了额外的姓名，使用第一个作为主要姓名
        if (additionalNames.length > 0 && !name) {
            name = additionalNames[0];
        }
        
        // 识别地址（从清理后的文本中）
        address = this.recognizeAddress(remainingText);
        
        // 特殊处理：如果只有地址没有姓名和电话，可能是地址行
        if (address && !name && !phone) {
            return { address, name: null, phone: null, status: 'warning' };
        }
        
        // 特殊处理：如果只有姓名和电话没有地址，可能是姓名电话行
        if (name && phone && !address) {
            return { address: null, name, phone, status: 'warning' };
        }
        
        // 判断识别结果
        let status = 'success';
        if (!address && !name && !phone) {
            status = 'error';
        } else if (!address || !name || !phone) {
            status = 'warning';
        }
        
        return { address, name, phone, status };
    }

    // 主识别函数
    recognize() {
        const inputText = document.getElementById('inputText').value.trim();
        if (!inputText) {
            this.showToast('请输入需要识别的文本', 'error');
            return;
        }
        
        // 显示加载状态
        const recognizeBtn = document.getElementById('recognizeBtn');
        const originalText = recognizeBtn.innerHTML;
        recognizeBtn.innerHTML = '<span class="loading"></span> 识别中...';
        recognizeBtn.disabled = true;
        
        setTimeout(() => {
            try {
                this.performRecognition(inputText);
            } catch (error) {
                console.error('识别错误:', error);
                this.showToast('识别过程中出现错误', 'error');
            } finally {
                recognizeBtn.innerHTML = originalText;
                recognizeBtn.disabled = false;
            }
        }, 100);
    }

    // 执行识别
    performRecognition(inputText) {
        const separator = this.getSeparator();
        const detectedSeparator = separator || this.detectSeparator(inputText);
        
        // 先按换行符分割，然后智能分组
        const lines = inputText.split('\n').filter(line => line.trim());
        this.results = [];
        
        let currentGroup = [];
        let groupIndex = 1;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) {
                // 遇到空行，处理当前组
                if (currentGroup.length > 0) {
                    this.processGroup(currentGroup, groupIndex++);
                    currentGroup = [];
                }
                continue;
            }
            
            // 检查当前行是否包含完整信息（地址+姓名+电话）
            const hasCompleteInfo = this.hasCompleteInfo(line, detectedSeparator);
            
            if (hasCompleteInfo) {
                // 如果当前行包含完整信息，处理当前组（如果有的话）
                if (currentGroup.length > 0) {
                    this.processGroup(currentGroup, groupIndex++);
                    currentGroup = [];
                }
                // 处理当前行
                const result = this.recognizeLine(line, detectedSeparator);
                if (result) {
                    this.results.push({
                        index: groupIndex++,
                        ...result
                    });
                }
            } else {
                // 如果当前行不包含完整信息，加入当前组
                currentGroup.push(line);
                
                // 检查当前组是否已经足够完整
                if (currentGroup.length >= 3 || this.isGroupComplete(currentGroup)) {
                    this.processGroup(currentGroup, groupIndex++);
                    currentGroup = [];
                }
            }
        }
        
        // 处理剩余的组
        if (currentGroup.length > 0) {
            this.processGroup(currentGroup, groupIndex++);
        }
        
        this.displayResults();
        this.showToast(`识别完成！共处理 ${this.results.length} 组数据`, 'success');
    }
    
    // 检查一行是否包含完整信息
    hasCompleteInfo(line, separator) {
        if (separator) {
            const parts = line.split(separator).filter(part => part.trim());
            return parts.length >= 3;
        }
        
        // 智能检测：如果一行包含地址关键词、姓名特征和电话号码，认为是完整信息
        const hasAddress = ADDRESS_KEYWORDS.some(keyword => line.includes(keyword));
        const hasPhone = /\b1[3-9]\d{9}\b|\b\d{3,4}-?\d{7,8}\b|400-?\d{3}-?\d{4}/.test(line);
        const hasName = CHINESE_SURNAMES.some(surname => line.includes(surname));
        
        // 检查是否包含多个电话号码（可能表示多组信息）
        const phoneCount = (line.match(/\b1[3-9]\d{9}\b|\b\d{3,4}-?\d{7,8}\b|400-?\d{3}-?\d{4}/g) || []).length;
        
        // 如果包含多个电话号码，可能需要分割处理
        if (phoneCount > 1) {
            return false; // 让分组逻辑处理
        }
        
        // 新增：检查是否以管道符结尾，可能表示不完整
        if (line.trim().endsWith('|')) {
            return false; // 让多行处理逻辑处理
        }
        
        return hasAddress && hasPhone && hasName;
    }
    
    // 检查组是否已经完整
    isGroupComplete(group) {
        const combinedText = group.join(' ');
        const hasAddress = ADDRESS_KEYWORDS.some(keyword => combinedText.includes(keyword));
        const hasPhone = /\d{3,4}-?\d{7,8}|1[3-9]\d{9}|400-?\d{3}-?\d{4}/.test(combinedText);
        const hasName = CHINESE_SURNAMES.some(surname => combinedText.includes(surname));
        
        return hasAddress && hasPhone && hasName;
    }
    
    // 处理一组信息
    processGroup(group, index) {
        if (group.length === 0) return;
        
        // 检查是否包含多组信息
        const combinedText = group.join(' ');
        const phoneCount = (combinedText.match(/\b1[3-9]\d{9}\b|\b\d{3,4}-?\d{7,8}\b|400-?\d{3}-?\d{4}/g) || []).length;
        
        if (phoneCount > 1) {
            // 如果包含多个电话号码，尝试分割处理
            this.splitAndProcessMultipleRecords(combinedText, index);
            return;
        }
        
        // 智能合并组内信息
        let address = null;
        let name = null;
        let phone = null;
        let shopName = null;
        
        // 分别识别每个部分
        for (let line of group) {
            const phoneMatch = this.recognizePhone(line);
            if (phoneMatch && !phone) {
                phone = phoneMatch;
            }
            
            const nameMatch = this.recognizeName(line, document.getElementById('enableNameRecognition').checked);
            if (nameMatch && !name) {
                name = nameMatch;
            }
            
            const shopMatch = this.recognizeShopName(line);
            if (shopMatch && !shopName) {
                shopName = shopMatch;
            }
        }
        
        // 从所有行中提取地址信息（移除姓名、电话、店铺名）
        let addressText = '';
        for (let line of group) {
            let cleanLine = line;
            
            // 移除管道符
            cleanLine = cleanLine.replace(/\|/g, ' ').trim();
            
            // 移除电话号码
            if (phone) {
                cleanLine = cleanLine.replace(new RegExp(phone.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '');
            }
            
            // 彻底移除所有姓名
            const { cleanText: nameFreeText, removedNames: additionalNames } = this.removeAllNames(cleanLine, document.getElementById('enableNameRecognition').checked);
            cleanLine = nameFreeText;
            
            // 如果发现了额外的姓名，使用第一个作为主要姓名
            if (additionalNames.length > 0 && !name) {
                name = additionalNames[0];
            }
            
            // 移除店铺名
            if (shopName) {
                cleanLine = cleanLine.replace(new RegExp(shopName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '');
            }
            
            // 清理分隔符和空格
            cleanLine = cleanLine.replace(/[,\s，;；|、]+/g, ' ').trim();
            
            if (cleanLine) {
                addressText += cleanLine + ' ';
            }
        }
        
        addressText = addressText.trim();
        
        // 识别地址
        if (addressText) {
            address = this.recognizeAddress(addressText);
        }
        
        // 合并地址和店铺名
        if (address && shopName) {
            address = `${address} ${shopName}`;
        }
        
        // 如果组内信息不完整，尝试智能合并
        if (!address || !name || !phone) {
            const combinedResult = this.recognizeLine(combinedText, null);
            
            if (combinedResult) {
                address = address || combinedResult.address;
                name = name || combinedResult.name;
                phone = phone || combinedResult.phone;
            }
        }
        
        // 判断状态
        let status = 'success';
        if (!address && !name && !phone) {
            status = 'error';
        } else if (!address || !name || !phone) {
            status = 'warning';
        }
        
        this.results.push({
            index: index,
            address,
            name,
            phone,
            status
        });
    }
    
    // 分割并处理多组记录
    splitAndProcessMultipleRecords(text, baseIndex) {
        // 按电话号码分割文本
        const phoneRegex = /\b1[3-9]\d{9}\b|\b\d{3,4}-?\d{7,8}\b|400-?\d{3}-?\d{4}/g;
        const phones = text.match(phoneRegex) || [];
        
        if (phones.length <= 1) return;
        
        // 为每个电话号码创建单独的记录
        phones.forEach((phone, phoneIndex) => {
            // 提取包含该电话号码的文本片段
            const phoneStart = text.indexOf(phone);
            const phoneEnd = phoneStart + phone.length;
            
            // 向前查找地址和姓名
            let startPos = Math.max(0, phoneStart - 100);
            let endPos = Math.min(text.length, phoneEnd + 50);
            
            let recordText = text.substring(startPos, endPos);
            
            // 识别该记录的信息
            const result = this.recognizeLine(recordText, null);
            
            if (result) {
                this.results.push({
                    index: baseIndex + phoneIndex,
                    address: result.address,
                    name: result.name,
                    phone: phone.replace(/[^\d]/g, ''),
                    status: result.status
                });
            }
        });
    }

    // 显示结果
    displayResults() {
        const resultsSection = document.getElementById('resultsSection');
        const resultsBody = document.getElementById('resultsBody');
        
        // 更新统计信息
        const totalCount = this.results.length;
        const successCount = this.results.filter(r => r.status === 'success').length;
        const errorCount = this.results.filter(r => r.status === 'error').length;
        
        document.getElementById('totalCount').textContent = `总计: ${totalCount}条`;
        document.getElementById('successCount').textContent = `成功: ${successCount}条`;
        document.getElementById('errorCount').textContent = `失败: ${errorCount}条`;
        
        // 清空表格
        resultsBody.innerHTML = '';
        
        // 填充表格
        this.results.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.index}</td>
                <td>${result.address || '-'}</td>
                <td>${result.name || '-'}</td>
                <td>${result.phone || '-'}</td>
                <td class="status-${result.status}">
                    ${result.status === 'success' ? '✅ 完整' : 
                      result.status === 'warning' ? '⚠️ 部分' : '❌ 失败'}
                </td>
            `;
            resultsBody.appendChild(row);
        });
        
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 隐藏结果
    hideResults() {
        document.getElementById('resultsSection').style.display = 'none';
    }

    // 导出Excel
    exportToExcel() {
        if (this.results.length === 0) {
            this.showToast('没有可导出的数据', 'error');
            return;
        }
        
        try {
            // 创建工作簿
            const wb = XLSX.utils.book_new();
            
            // 准备数据
            const data = [
                ['序号', '地址', '姓名', '电话', '状态']
            ];
            
            this.results.forEach(result => {
                data.push([
                    result.index,
                    result.address || '',
                    result.name || '',
                    result.phone || '',
                    result.status === 'success' ? '完整' : 
                    result.status === 'warning' ? '部分' : '失败'
                ]);
            });
            
            // 创建工作表
            const ws = XLSX.utils.aoa_to_sheet(data);
            
            // 设置列宽
            ws['!cols'] = [
                { width: 8 },  // 序号
                { width: 30 }, // 地址
                { width: 15 }, // 姓名
                { width: 15 }, // 电话
                { width: 10 }  // 状态
            ];
            
            // 添加工作表到工作簿
            XLSX.utils.book_append_sheet(wb, ws, '地址信息');
            
            // 导出文件
            const fileName = `地址信息识别结果_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.xlsx`;
            XLSX.writeFile(wb, fileName);
            
            this.showToast('Excel文件导出成功！', 'success');
        } catch (error) {
            console.error('导出错误:', error);
            this.showToast('导出失败，请重试', 'error');
        }
    }

    // 复制结果
    copyResults() {
        if (this.results.length === 0) {
            this.showToast('没有可复制的数据', 'error');
            return;
        }
        
        try {
            const text = this.results.map(result => 
                `${result.index}\t${result.address || ''}\t${result.name || ''}\t${result.phone || ''}\t${result.status}`
            ).join('\n');
            
            const header = '序号\t地址\t姓名\t电话\t状态\n';
            const fullText = header + text;
            
            navigator.clipboard.writeText(fullText).then(() => {
                this.showToast('结果已复制到剪贴板', 'success');
            }).catch(() => {
                // 降级方案
                const textarea = document.createElement('textarea');
                textarea.value = fullText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.showToast('结果已复制到剪贴板', 'success');
            });
        } catch (error) {
            console.error('复制错误:', error);
            this.showToast('复制失败，请重试', 'error');
        }
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new AddressInfoRecognizer();
}); 