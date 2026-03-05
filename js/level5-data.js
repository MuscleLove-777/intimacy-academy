/* ============================================
   インティマシーアカデミー - Level 5: アフターケアと絆
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "アフターケアと絆",
    icon: "🫂",
    description: "行為後のケアと継続的な親密さの維持",
    modules: [

        {
            id: 501,
            title: "アフターケアの重要性",
            duration: "10分",
            content: `
<h2>🫂 アフターケアの重要性</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>アフターケアとは、性行為の後に<strong>身体的・精神的にお互いをケアする</strong>ことです。多くの人が見落としがちですが、<strong>信頼関係と満足度に直結</strong>する極めて重要な時間です。</p>
</div>

<h3>🧠 なぜアフターケアが必要なのか</h3>

<div class="visual-box">
<div class="visual-box-title">行為後の脳内変化</div>
<div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;padding:15px 0;">
<div style="background:#F3E5F5;border:2px solid #9C27B0;border-radius:12px;padding:16px;text-align:center;min-width:180px;">
<div style="font-size:1.5rem;">📉</div>
<div style="font-weight:700;">ドーパミン急降下</div>
<div style="font-size:0.8rem;color:#666;">興奮状態から急に冷める<br>→ 空虚感を感じることも</div>
</div>
<div style="display:flex;align-items:center;font-size:1.5rem;">→</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;min-width:180px;">
<div style="font-size:1.5rem;">📈</div>
<div style="font-weight:700;">オキシトシン上昇</div>
<div style="font-size:0.8rem;color:#666;">触れ合いやケアで分泌<br>→ 絆と安心感が深まる</div>
</div>
</div>
</div>

<h3>✅ アフターケアの具体的な方法</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>身体的ケア</strong>
<ul>
<li>ハグ・添い寝で体温を共有する</li>
<li>水やお茶を差し出す（脱水予防）</li>
<li>タオルやティッシュで清潔にする</li>
<li>ブランケットをかける（体温低下を防ぐ）</li>
</ul>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>精神的ケア</strong>
<ul>
<li>「ありがとう」「幸せだった」と気持ちを伝える</li>
<li>しばらく一緒にいる（すぐに帰る・寝るのは避ける）</li>
<li>軽い会話を楽しむ</li>
<li>相手の気持ちを確認する「大丈夫？」「どうだった？」</li>
</ul>
</div>
</div>
</div>

<h3>❌ やってはいけないこと</h3>

<div class="info-box danger">
<div class="info-box-title">⛔ アフターケアのNG行動</div>
<ul>
<li><strong>行為後すぐにスマホをいじる</strong>（興味がないと思われる）</li>
<li><strong>すぐに帰る/帰ってと言う</strong>（使い捨て感）</li>
<li><strong>行為のダメ出しをする</strong>（自信を失わせる）</li>
<li><strong>無言で寝る</strong>（パートナーが不安になる）</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>アフターケアは<strong>オキシトシン分泌を促し、絆を深める</strong></li>
<li><strong>身体的ケア</strong>（水・タオル・ハグ）と<strong>精神的ケア</strong>（言葉・存在）</li>
<li>行為後すぐにスマホ・帰宅は<strong>NG</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "アフターケアで最も大切なのはどれですか？", options: ["すぐに次の行為の話をする", "身体的・精神的にパートナーをケアする時間を持つ", "すぐにシャワーを浴びる", "行為の反省点を話し合う"], answer: 1, explanation: "アフターケアはハグ・会話・水分補給などで、お互いを身体的・精神的にケアする時間です。" },
            ]
        },

        {
            id: 502,
            title: "セックスレスの予防と対処",
            duration: "12分",
            content: `
<h2>🔄 セックスレスの予防と対処</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>長期的な関係では性的な頻度が減ることは<strong>自然なこと</strong>です。問題は頻度ではなく、<strong>お互いの満足度とコミュニケーション</strong>にあります。</p>
</div>

<h3>📊 セックスレスの原因</h3>

<table>
<tr><th>カテゴリ</th><th>具体的な原因</th><th>対処法</th></tr>
<tr><td>身体的</td><td>疲労・ストレス・ホルモン変化・薬の副作用</td><td>生活習慣改善・医師相談</td></tr>
<tr><td>心理的</td><td>マンネリ・自信喪失・過去のトラウマ</td><td>カウンセリング・新しい体験</td></tr>
<tr><td>関係性</td><td>コミュニケーション不足・未解決の不満</td><td>オープンな対話</td></tr>
<tr><td>環境的</td><td>子育て・介護・プライバシーの欠如</td><td>二人の時間を意識的に作る</td></tr>
</table>

<h3>🔑 予防のための習慣</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>日常的なスキンシップを維持する</strong>
キス・ハグ・手をつなぐ。セックスに直結しない愛情表現が土台。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>デートの習慣を続ける</strong>
付き合いが長くても「二人だけの時間」を意識的に作る。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>性について定期的に話し合う</strong>
不満が溜まる前に「最近どう？」と確認し合う。
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<strong>マンネリを打破する</strong>
新しい場所・新しい体験・新しいアプローチを試みる。
</div>
</div>
</div>

<div class="info-box formula">
<div class="info-box-title">🔑 「スケジュールセックス」という選択肢</div>
<p>自然にタイミングが合わないなら、<strong>カレンダーに「二人の時間」を入れる</strong>のも有効です。ロマンチックでないと思うかもしれませんが：</p>
<ul>
<li>お互いが<strong>心身の準備</strong>をできる</li>
<li><strong>確実に時間を確保</strong>できる</li>
<li>デートの<strong>ワクワク感</strong>が復活する</li>
<li>多くのカップルカウンセラーが推奨している方法</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>頻度の低下は<strong>自然なこと</strong>。問題は満足度</li>
<li><strong>日常的なスキンシップ</strong>が性的な親密さの土台</li>
<li><strong>定期的な対話</strong>で不満を溜めない</li>
</ul>
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "セックスレスの最も根本的な原因として多いのはどれですか？", options: ["体力の低下", "コミュニケーション不足", "年齢", "仕事の忙しさ"], answer: 1, explanation: "多くの場合、コミュニケーション不足が根底にあります。不満や希望を伝えられないことが関係の停滞につながります。" },
            ]
        },

        {
            id: 503,
            title: "セクシュアリティの多様性",
            duration: "10分",
            content: `
<h2>🌈 セクシュアリティの多様性</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>セクシュアリティは<strong>グラデーション</strong>であり、二者択一ではありません。自分自身と他者の多様なあり方を理解し、尊重しましょう。</p>
</div>

<h3>🔬 セクシュアリティの4つの軸</h3>

<div class="visual-box">
<div class="visual-box-title">セクシュアリティを構成する要素</div>
<div style="display:flex;flex-direction:column;gap:8px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#FCE4EC;border-left:4px solid #E91E63;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>① 生物学的性（Sex）</strong>：身体的な性別特徴
</div>
<div style="background:#E3F2FD;border-left:4px solid #1976D2;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>② 性自認（Gender Identity）</strong>：自分が認識する性別
</div>
<div style="background:#F3E5F5;border-left:4px solid #9C27B0;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>③ 性的指向（Sexual Orientation）</strong>：どの性別に惹かれるか
</div>
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:12px 16px;border-radius:0 8px 8px 0;">
<strong>④ 性表現（Gender Expression）</strong>：外見や行動で表す性のスタイル
</div>
</div>
</div>

<h3>📋 性的指向の多様性</h3>

<table>
<tr><th>指向</th><th>説明</th></tr>
<tr><td>ヘテロセクシュアル</td><td>異性に惹かれる</td></tr>
<tr><td>ホモセクシュアル</td><td>同性に惹かれる</td></tr>
<tr><td>バイセクシュアル</td><td>複数の性別に惹かれる</td></tr>
<tr><td>パンセクシュアル</td><td>性別にかかわらず人に惹かれる</td></tr>
<tr><td>アセクシュアル</td><td>性的な魅力をほぼ/全く感じない</td></tr>
<tr><td>デミセクシュアル</td><td>深い感情的な絆がないと性的魅力を感じない</td></tr>
</table>

<h3>🤝 アライ（Ally）としての姿勢</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 大切な姿勢</div>
<ul>
<li><strong>ジャッジしない</strong>：自分と異なるセクシュアリティを否定しない</li>
<li><strong>決めつけない</strong>：見た目や行動でセクシュアリティを判断しない</li>
<li><strong>アウティングしない</strong>：他者のセクシュアリティを勝手に暴露しない</li>
<li><strong>学び続ける</strong>：知識不足は恥ではない。学ぶ姿勢が大切</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>セクシュアリティは<strong>4つの軸</strong>で構成される</li>
<li>性的指向は<strong>グラデーション</strong></li>
<li>他者のセクシュアリティを<strong>尊重し、ジャッジしない</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "セクシュアリティを構成する要素に含まれないのはどれですか？", options: ["性自認", "性的指向", "血液型", "性表現"], answer: 2, explanation: "セクシュアリティは生物学的性・性自認・性的指向・性表現の4軸で構成されます。血液型は関係ありません。" },
            ]
        },

        {
            id: 504,
            title: "性と心の健康",
            duration: "10分",
            content: `
<h2>🧠 性と心の健康</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>性的な健康は<strong>全体的な心身の健康</strong>と密接に結びついています。身体だけでなく、心の健康にも目を向けましょう。</p>
</div>

<h3>💆 性的な健康のチェックリスト</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ 健全な性的健康</h4>
<ul>
<li>性に対してポジティブな感情がある</li>
<li>自分の身体を受け入れている</li>
<li>パートナーとオープンに話せる</li>
<li>NOと言える</li>
<li>安全なセックスを実践している</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">⚠️ 注意が必要なサイン</h4>
<ul>
<li>性に対して強い恐怖や罪悪感がある</li>
<li>自分の身体に強い嫌悪感がある</li>
<li>パートナーに本音を言えない</li>
<li>望まない行為を断れない</li>
<li>セックスが義務になっている</li>
</ul>
</div>
</div>

<h3>🆘 相談窓口</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 困ったときの相談先</div>
<ul>
<li><strong>DV相談ナビ</strong>：#8008（最寄りの相談窓口）</li>
<li><strong>性犯罪被害相談</strong>：#8103（警察）</li>
<li><strong>よりそいホットライン</strong>：0120-279-338（24時間無料）</li>
<li><strong>婦人科・泌尿器科</strong>：身体的な悩みの相談</li>
<li><strong>心療内科・カウンセラー</strong>：心理的な悩みの相談</li>
</ul>
</div>

<h3>🌟 セルフケアの大切さ</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>自分の身体を知る</strong>
自分の身体で何が心地よいかを知ることは、健全なセクシュアリティの基盤。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>境界線を持つ</strong>
「やりたくないことはやらない」は基本的権利。罪悪感を持つ必要はない。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>比較しない</strong>
他のカップルや、ポルノ・メディアと自分を比較しない。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>性の健康は<strong>心身の全体的な健康</strong>の一部</li>
<li>困ったら<strong>一人で抱え込まず相談</strong>する</li>
<li><strong>自分の身体を知り、境界線を持つ</strong>ことが大切</li>
</ul>
</div>
`,
            quiz: [
                { id: "q504_1", type: "choice", question: "健全な性的健康のサインとして正しいのはどれですか？", options: ["パートナーの要求にすべて応える", "性に対してポジティブな感情がありNOと言える", "頻繁に性行為をしている", "性について考えないようにする"], answer: 1, explanation: "性に対してポジティブで、かつNOと言えることが健全な性的健康のサインです。" },
            ]
        },
    ]
};
